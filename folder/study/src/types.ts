import { IAuthor } from './author';

export type IReview = [string, number, string];

export enum IGenre {
  Fantasy = 'fantasy',
  Adventure = 'adventure',
  Horror = 'horror',
  Programming = 'programming',
}

export enum Cover {
  Paperback = 'paperback',
  Hardcover = 'hardcover',
}

export type BookAuthor = Pick<IAuthor, 'firstName' | 'lastName'>