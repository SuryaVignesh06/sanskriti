/**
 * Collection ID: deities
 * Interface for Deities
 */
export interface Deities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  deityName?: string;
  /** @wixFieldType text */
  stateName?: string;
  /** @wixFieldType text */
  history?: string;
  /** @wixFieldType text */
  culturalSignificance?: string;
  /** @wixFieldType url */
  youtubeUrl?: string;
  /** @wixFieldType image */
  deityImage?: string;
}
