/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  elementImage?: string;
}


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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  deityImage?: string;
}


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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mudraImage?: string;
  /** @wixFieldType text */
  meaning?: string;
  /** @wixFieldType text */
  usage?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
}


/**
 * Collection ID: quizzes
 * Interface for Quizzes
 */
export interface Quizzes {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  quizTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  difficultyLevel?: string;
  /** @wixFieldType number */
  passingScore?: number;
  /** @wixFieldType text */
  badgeAwarded?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  quizImage?: string;
  /** @wixFieldType text */
  quizContent?: string;
}


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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  stateImage?: string;
  /** @wixFieldType url */
  youtubeLink?: string;
}
