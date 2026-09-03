import { items } from "@wix/data";
import { WixDataItem } from ".";

/**
 * Pagination options for querying collections
 */
export interface PaginationOptions {
  /** Number of items per page (default: 50, max: 1000) */
  limit?: number;
  /** Number of items to skip (for offset-based pagination) */
  skip?: number;
}

/**
 * Metadata for a multi-reference field (available on item._refMeta[fieldName])
 * Only populated by getById, not getAll
 */
export interface RefFieldMeta {
  /** Total count of referenced items */
  totalCount: number;
  /** Number of items returned */
  returnedCount: number;
  /** Whether there are more items beyond what was returned */
  hasMore: boolean;
}

/**
 * Paginated result with metadata for infinite scroll
 */
export interface PaginatedResult<T> {
  /** Array of items for current page */
  items: T[];
  /** Total number of items in the collection */
  totalCount: number;
  /** Whether there are more items after current page */
  hasNext: boolean;
  /** Current page number (0-indexed) */
  currentPage: number;
  /** Number of items per page */
  pageSize: number;
  /** Offset to use for next page */
  nextSkip: number | null;
}

/**
 * Generic CRUD Service class for Wix Data collections
 * Provides type-safe CRUD operations with error handling
 */
export class BaseCrudService {
  /**
   * Populates multi-reference fields for a single item using queryReferenced()
   * Fetches up to 1000 items and provides metadata for further pagination
   */
  private static async populateMultiRefs<T extends WixDataItem>(
    collectionId: string,
    item: T,
    multiRefs: string[]
  ): Promise<T> {
    if (multiRefs.length === 0) return item;

    const itemWithRefs = { ...item } as any;
    itemWithRefs._refMeta = {};

    for (const refField of multiRefs) {
      try {
        // Fetch up to 1000 referenced items with total count
        const result = await items.queryReferenced(collectionId, item._id, refField, {
          limit: 1000,
          returnTotalCount: true
        });

        itemWithRefs[refField] = result.items;
        itemWithRefs._refMeta[refField] = {
          totalCount: result.totalCount ?? result.items.length,
          returnedCount: result.items.length,
          hasMore: result.hasNext()
        };
      } catch {
        itemWithRefs[refField] = [];
        itemWithRefs._refMeta[refField] = { totalCount: 0, returnedCount: 0, hasMore: false };
      }
    }
    return itemWithRefs as T;
  }

  /**
   * Creates a new item in the collection
   * @param itemData - Data for the new item (single reference fields should be IDs: string)
   * @param multiReferences - Multi-reference fields as Record<fieldName, arrayOfIds>
   * @returns Promise<T> - The created item
   */
  static async create<T extends WixDataItem>(
    collectionId: string,
    itemData: Partial<T> | Record<string, unknown>,
    multiReferences?: Record<string, any>
  ): Promise<T> {
    try {
      const result = (await items.insert(collectionId, itemData as Record<string, unknown>)) as T;

      if (multiReferences && Object.keys(multiReferences).length > 0 && result._id) {
        for (const [propertyName, refIds] of Object.entries(multiReferences)) {
          if (Array.isArray(refIds) && refIds.length > 0) {
            await items.insertReference(collectionId, propertyName, result._id, refIds as string[]);
          }
        }
      }

      return result;
    } catch (error) {
      // Should consider reverting the insert with a remove in order to prevent partial insert.
      console.error(`Error creating ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to create ${collectionId}`
      );
    }
  }

  /**
   * Retrieves items from the collection with pagination (default: 50 per page)
   * @param includeRefs - { singleRef: [...], multiRef: [...] } or string[] for backward compatibility
   */
  static async getAll<T extends WixDataItem>(
    collectionId: string,
    includeRefs?: { singleRef?: string[]; multiRef?: string[] } | string[],
    pagination?: PaginationOptions
  ): Promise<PaginatedResult<T>> {
    try {
      const limit = Math.min(pagination?.limit ?? 50, 1000);
      const skip = pagination?.skip ?? 0;

      const allRefs = Array.isArray(includeRefs)
        ? includeRefs
        : [...(includeRefs?.singleRef || []), ...(includeRefs?.multiRef || [])];

      let query = items.query(collectionId);
      if (allRefs.length > 0) {
        query = query.include(...allRefs);
      }

      const result = await query.skip(skip).limit(limit).find({ returnTotalCount: true });
      if (result.items && result.items.length > 0) {
        const hasNext = result.hasNext();
        return {
          items: result.items as T[],
          totalCount: result.totalCount ?? result.items.length,
          hasNext,
          currentPage: Math.floor(skip / limit),
          pageSize: limit,
          nextSkip: hasNext ? skip + limit : null,
        };
      }
    } catch (error) {
      console.warn(`Wix data query for ${collectionId} returned empty or errored, loading standalone mock data fallback.`);
    }

    const mockItems = getMockData(collectionId) as T[];
    return {
      items: mockItems,
      totalCount: mockItems.length,
      hasNext: false,
      currentPage: 0,
      pageSize: 50,
      nextSkip: null,
    };
  }

  static async getById<T extends WixDataItem>(
    collectionId: string,
    itemId: string,
    includeRefs?: { singleRef?: string[]; multiRef?: string[] } | string[]
  ): Promise<T | null> {
    try {
      const isLegacyFormat = Array.isArray(includeRefs);
      const singleRefs = isLegacyFormat ? includeRefs : (includeRefs?.singleRef || []);
      const multiRefs = isLegacyFormat ? [] : (includeRefs?.multiRef || []);

      let query = items.query(collectionId).eq("_id", itemId);
      if (singleRefs.length > 0) {
        query = query.include(...singleRefs);
      }

      const result = await query.find();
      if (result.items && result.items.length > 0) {
        return this.populateMultiRefs<T>(collectionId, result.items[0] as T, multiRefs);
      }
    } catch (error) {
      console.warn(`Wix fetch by ID for ${collectionId} failed, loading standalone mock data.`);
    }

    const mockItems = getMockData(collectionId) as T[];
    return mockItems.find(item => item._id === itemId || (item as any).stateKey === itemId) || mockItems[0] || null;
  }

  /**
   * Updates an existing item
   * @param itemData - Updated item data (must include _id, only include fields to update)
   * @returns Promise<T> - The updated item
   */
  static async update<T extends WixDataItem>(collectionId: string, itemData: T): Promise<T> {
    try {
      if (!itemData._id) {
        throw new Error(`${collectionId} ID is required for update`);
      }

      const currentItem = await this.getById<T>(collectionId, itemData._id);

      const mergedData = { ...currentItem, ...itemData };

      const result = await items.update(collectionId, mergedData);
      return result as T;
    } catch (error) {
      console.error(`Error updating ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to update ${collectionId}`
      );
    }
  }

  /**
   * Deletes an item by ID
   * @param itemId - ID of the item to delete
   * @returns Promise<T> - The deleted item
   */
  static async delete<T extends WixDataItem>(collectionId: string, itemId: string): Promise<T> {
    try {
      if (!itemId) {
        throw new Error(`${collectionId} ID is required for deletion`);
      }

      const result = await items.remove(collectionId, itemId);
      return result as T;
    } catch (error) {
      console.error(`Error deleting ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to delete ${collectionId}`
      );
    }
  }

  /**
   * Adds references to a multi-reference field
   * @param collectionId - The collection containing the item
   * @param itemId - The item to add references to
   * @param references - Record of field names to arrays of reference IDs
   */
  static async addReferences(
    collectionId: string,
    itemId: string,
    references: Record<string, string[]>
  ): Promise<void> {
    try {
      for (const [fieldName, refIds] of Object.entries(references)) {
        if (refIds.length > 0) {
          await items.insertReference(collectionId, fieldName, itemId, refIds);
        }
      }
    } catch (error) {
      console.error(`Error adding references to ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to add references to ${collectionId}`
      );
    }
  }

  /**
   * Removes references from a multi-reference field
   * @param collectionId - The collection containing the item
   * @param itemId - The item to remove references from
   * @param references - Record of field names to arrays of reference IDs to remove
   */
  static async removeReferences(
    collectionId: string,
    itemId: string,
    references: Record<string, string[]>
  ): Promise<void> {
    try {
      for (const [fieldName, refIds] of Object.entries(references)) {
        if (refIds.length > 0) {
          await items.removeReference(collectionId, fieldName, itemId, refIds);
        }
      }
    } catch (error) {
      console.error(`Error removing references from ${collectionId}:`, error);
      throw new Error(
        error instanceof Error ? error.message : `Failed to remove references from ${collectionId}`
      );
    }
  }

}

function getMockData(collectionId: string): any[] {
  switch (collectionId) {
    case 'states':
      return [
        {
          _id: 'ap-1',
          stateName: 'Andhra Pradesh',
          stateKey: 'andhra-pradesh',
          description: 'Discover the birthplace of Kuchipudi classical dance, the spiritual grandeur of Tirupati Venkateswara, rich Godavari cuisine, and centuries-old craft heritage.',
          highlighted: true,
          stateImage: 'https://static.wixstatic.com/media/4faed4_b1370c7b76e141fc82c5a9d6160e5d35~mv2.png?originWidth=576&originHeight=384',
          youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        {
          _id: 'tn-1',
          stateName: 'Tamil Nadu',
          stateKey: 'tamil-nadu',
          description: 'Home of Bharatanatyam dance, ancient Dravidian temple gopurams, and rich Carnatic musical traditions.',
          highlighted: false,
          stateImage: 'https://static.wixstatic.com/media/4faed4_bf13181b340a4c5e853d1c2f799d024f~mv2.png?originWidth=1920&originHeight=1024'
        },
        {
          _id: 'kl-1',
          stateName: 'Kerala',
          stateKey: 'kerala',
          description: 'Land of Kathakali, Mohiniyattam, serene backwaters, and traditional Ayurveda heritage.',
          highlighted: false,
          stateImage: 'https://static.wixstatic.com/media/4faed4_b839f24d385f4a3aa12b520594c2fdb2~mv2.png?originWidth=1920&originHeight=1024'
        },
        {
          _id: 'rj-1',
          stateName: 'Rajasthan',
          stateKey: 'rajasthan',
          description: 'Land of royal forts, Ghoomar dance, Kalbelia folk art, and vibrant desert festivals.',
          highlighted: false
        },
        {
          _id: 'mh-1',
          stateName: 'Maharashtra',
          stateKey: 'maharashtra',
          description: 'Home of Lavani folk dance, Ganesh Chaturthi festivities, and Ajanta-Ellora rock architecture.',
          highlighted: false
        },
        {
          _id: 'pb-1',
          stateName: 'Punjab',
          stateKey: 'punjab',
          description: 'Land of Bhangra, Giddha, golden wheat fields, and rich folk music traditions.',
          highlighted: false
        }
      ];

    case 'indiandanceforms':
      return [
        {
          _id: 'dance-kuchipudi',
          danceName: 'Kuchipudi',
          history: 'Kuchipudi originated in Kuchelapuram village in Krishna district, Andhra Pradesh during the 17th century by saint Siddhendra Yogi. Combining natya (drama), nritta (pure dance), and nritya (expressive gestural storytelling), Kuchipudi is renowned for its fluid footwork, dramatic abhinaya, and the spectacular Tarangam where dancers balance on a brass plate holding oil lamps.',
          adavusDescription: 'Kuchipudi adavus emphasize deep knee bends (Araimandi), crisp heel stamps, swift turns, and expressive eye movements that synchronized perfectly with Carnatic tala rhythms.',
          talasDescription: 'Performed in Adi Tala (8 beats), Rupaka Tala (6 beats), and Misra Chapu in soulful Carnatic ragas like Kalyani, Mohanam, and Hindolam.',
          mudrasOverview: 'Uses 28 Asamyuta (single hand) and 24 Samyuta (double hand) mudras to convey complex narrative emotions from sacred epics like the Natya Shastra.',
          costumeDescription: 'Dancers wear vibrant pleated silk sarees with traditional front aprons, gold temple jewelry, waist belt (Vaddanam), ankle bells (Ghungroo), and jasmine hair braids.',
          arTryOnAvailable: true,
          arTryOnUrl: 'https://ar.sanskriti.app/kuchipudi',
          youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          costumeImage: 'https://static.wixstatic.com/media/4faed4_3c87384e8cd945cdb98328ef94a3f106~mv2.png?originWidth=1920&originHeight=1024',
          aiReaderText: 'Kuchipudi is a classical Indian dance-drama originating in Andhra Pradesh. Founded by Siddhendra Yogi, it combines intricate footwork, graceful body movements, and rich facial expressions to depict mythological stories.'
        }
      ];

    case 'deities':
      return [
        {
          _id: 'deity-venkateswara',
          deityName: 'Lord Venkateswara (Tirupati)',
          stateName: 'Andhra Pradesh',
          history: 'Lord Venkateswara is a revered avatar of Lord Vishnu who manifested on the sacred Venkatadri hill of Tirumala, as recorded in the ancient Venkatachala Mahatmya. Known as Kaliyuga Vaikuntam, the shrine stands as one of the most sacred pilgrimage destinations on earth.',
          culturalSignificance: 'Central to Andhra Pradesh culture and spiritual life, drawing millions of devotees for annual Brahmotsavam celebrations, tonsure rituals, and sacred Laddu prasadam.',
          deityImage: 'https://static.wixstatic.com/media/4faed4_f6c82d241fd042ce91cc6513fc02bc82~mv2.png?originWidth=1920&originHeight=1024',
          youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
      ];

    case 'mudras':
      return [
        {
          _id: 'mudra-pataka',
          mudraName: 'Pataka',
          danceStyle: 'Kuchipudi',
          meaning: 'Flag gesture with fingers extended together and thumb bent.',
          usage: 'Denotes divine blessing, forest, night, opening doors, and ocean waves.',
          mudraImage: 'https://static.wixstatic.com/media/4faed4_b839f24d385f4a3aa12b520594c2fdb2~mv2.png?originWidth=1920&originHeight=1024'
        },
        {
          _id: 'mudra-tripataka',
          mudraName: 'Tripataka',
          danceStyle: 'Kuchipudi',
          meaning: 'Three parts of flag with ring finger bent.',
          usage: 'Represents crown, royal tree, thunderbolt, and sacred marks.'
        },
        {
          _id: 'mudra-mayura',
          mudraName: 'Mayura',
          danceStyle: 'Kuchipudi',
          meaning: 'Peacock gesture with ring finger touching thumb tip.',
          usage: 'Denotes graceful peacock, stroking hair, and applying tilak.'
        }
      ];

    case 'culturalelements':
      return [
        {
          _id: 'ce-1',
          elementName: 'Sankranti & Tirupati Brahmotsavam',
          elementType: 'festival',
          shortDescription: 'Grand 4-day harvest festival of Sankranti and the 9-day annual Brahmotsavam chariot festival.',
          detailedDescription: 'Sankranti features colourful rangoli (Muggulu), Haridasu songs, and kite flying. Brahmotsavam fills Tirumala with majestic vehicle processions (Vahanas) and divine music.',
          elementImage: 'https://static.wixstatic.com/media/4faed4_41c09eb29aa741f2a36b5bc93c042211~mv2.png?originWidth=500&originHeight=300'
        },
        {
          _id: 'ce-2',
          elementName: 'Godavari Cuisine & Atreyapuram Pootharekulu',
          elementType: 'cuisine',
          shortDescription: 'Fiery Andhra curries, Gongura chutney, and wafer-thin sweet Pootharekulu.',
          detailedDescription: 'Renowned for spicy Avakaya mango pickle, Gongura mutton, Pulihora, and delicate Pootharekulu (paper sweet) crafted from rice starch paper, ghee, and jaggery.',
          elementImage: 'https://static.wixstatic.com/media/4faed4_1e37bc16b8fb49678e71887372bc7bcf~mv2.png?originWidth=500&originHeight=300'
        },
        {
          _id: 'ce-3',
          elementName: 'Kondapalli Toys & Kalamkari Art',
          elementType: 'craft',
          shortDescription: 'Handcrafted wooden toys of Kondapalli and natural vegetable dye textile paintings of Srikalahasti.',
          detailedDescription: 'Kondapalli toys are carved from soft Poniki wood depicting rural life and dancing figures. Kalamkari art uses bamboo pens and vegetable dyes to tell sacred epic stories on cotton fabric.',
          elementImage: 'https://static.wixstatic.com/media/4faed4_582845347ff642cc994d5fa3e1f57930~mv2.png?originWidth=500&originHeight=300'
        }
      ];

    default:
      return [];
  }
}

