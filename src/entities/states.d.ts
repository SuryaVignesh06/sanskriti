/**
 * Collection ID: states
 * Interface for States
 */
export interface States {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  stateName?: string;
  /** @wixFieldType text */
  stateKey?: string;
  /** @wixFieldType text */
  svgMapId?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType boolean */
  highlighted?: boolean;
  /** @wixFieldType image */
  stateImage?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
}
