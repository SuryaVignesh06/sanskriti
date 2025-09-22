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
  /** @wixFieldType image */
  quizImage?: string;
  /** @wixFieldType text */
  quizContent?: string;
}
