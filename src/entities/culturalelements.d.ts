/**
 * Collection ID: culturalelements
 * Interface for CulturalElements
 */
export interface CulturalElements {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  elementName?: string;
  /** @wixFieldType text */
  elementType?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
  /** @wixFieldType image */
  elementImage?: string;
}
