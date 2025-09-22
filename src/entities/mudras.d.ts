/**
 * Collection ID: mudras
 * Interface for Mudras
 */
export interface Mudras {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  mudraName?: string;
  /** @wixFieldType text */
  danceStyle?: string;
  /** @wixFieldType image */
  mudraImage?: string;
  /** @wixFieldType text */
  meaning?: string;
  /** @wixFieldType text */
  usage?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
}
