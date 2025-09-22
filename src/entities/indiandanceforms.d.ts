/**
 * Collection ID: indiandanceforms
 * Interface for IndianDanceForms
 */
export interface IndianDanceForms {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  danceName?: string;
  /** @wixFieldType text */
  history?: string;
  /** @wixFieldType text */
  adavusDescription?: string;
  /** @wixFieldType text */
  talasDescription?: string;
  /** @wixFieldType text */
  mudrasOverview?: string;
  /** @wixFieldType text */
  costumeDescription?: string;
  /** @wixFieldType image */
  costumeImage?: string;
  /** @wixFieldType boolean */
  arTryOnAvailable?: boolean;
  /** @wixFieldType url */
  arTryOnUrl?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
  /** @wixFieldType text */
  aiReaderText?: string;
}
