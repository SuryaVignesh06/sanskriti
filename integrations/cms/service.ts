import { WixDataItem } from ".";

export interface PaginationOptions {
  limit?: number;
  skip?: number;
}

export interface RefFieldMeta {
  totalCount: number;
  returnedCount: number;
  hasMore: boolean;
}

export interface PaginatedResult<T> {
  items: T[];
  totalCount: number;
  hasNext: boolean;
  currentPage: number;
  pageSize: number;
  nextSkip: number | null;
}

export class BaseCrudService {
  static async create<T extends WixDataItem>(
    collectionId: string,
    itemData: Partial<T> | Record<string, unknown>,
    multiReferences?: Record<string, any>
  ): Promise<T> {
    return { _id: 'new-id', ...itemData } as T;
  }

  static async getAll<T extends WixDataItem>(
    collectionId: string,
    includeRefs?: { singleRef?: string[]; multiRef?: string[] } | string[],
    pagination?: PaginationOptions
  ): Promise<PaginatedResult<T>> {
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
    const mockItems = getMockData(collectionId) as T[];
    return mockItems.find(item => item._id === itemId || (item as any).stateKey === itemId) || mockItems[0] || null;
  }

  static async update<T extends WixDataItem>(collectionId: string, itemData: T): Promise<T> {
    return itemData;
  }

  static async delete<T extends WixDataItem>(collectionId: string, itemId: string): Promise<T> {
    return { _id: itemId } as T;
  }

  static async addReferences(collectionId: string, itemId: string, references: Record<string, string[]>): Promise<void> {}

  static async removeReferences(collectionId: string, itemId: string, references: Record<string, string[]>): Promise<void> {}
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
          history: 'Kuchipudi originated in Kuchelapuram village in Krishna district, Andhra Pradesh during the 17th century by saint Siddhendra Yogi.',
          adavusDescription: 'Kuchipudi adavus emphasize deep knee bends (Araimandi), crisp heel stamps, swift turns, and expressive eye movements.',
          talasDescription: 'Performed in Adi Tala (8 beats), Rupaka Tala (6 beats), and Misra Chapu.',
          mudrasOverview: 'Uses 28 Asamyuta (single hand) and 24 Samyuta (double hand) mudras.',
          costumeDescription: 'Dancers wear vibrant pleated silk sarees with traditional front aprons.',
          arTryOnAvailable: true,
          arTryOnUrl: 'https://ar.sanskriti.app/kuchipudi',
          youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          costumeImage: 'https://static.wixstatic.com/media/4faed4_3c87384e8cd945cdb98328ef94a3f106~mv2.png?originWidth=1920&originHeight=1024',
          aiReaderText: 'Kuchipudi is a classical Indian dance-drama originating in Andhra Pradesh.'
        }
      ];

    case 'deities':
      return [
        {
          _id: 'deity-venkateswara',
          deityName: 'Lord Venkateswara (Tirupati)',
          stateName: 'Andhra Pradesh',
          history: 'Lord Venkateswara is a revered avatar of Lord Vishnu who manifested on the sacred Venkatadri hill of Tirumala.',
          culturalSignificance: 'Central to Andhra Pradesh culture and spiritual life.',
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
          shortDescription: 'Grand harvest festival.',
          detailedDescription: 'Sankranti features colourful rangoli.',
          elementImage: 'https://static.wixstatic.com/media/4faed4_41c09eb29aa741f2a36b5bc93c042211~mv2.png?originWidth=500&originHeight=300'
        }
      ];

    default:
      return [];
  }
}
