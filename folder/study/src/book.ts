import { IRatingable } from './ratingable.js';
import { IProduct } from './product.js';
import { BookAuthor, IGenre, IReview } from './types.js';
import { IAuthor } from './author.js';

export class Book implements IRatingable, IProduct {
  name: string;
  genre: IGenre;
  price: number;
  reviews: IReview[];
  author: BookAuthor;
  rating: number;

  constructor(
    name: string,
    genre: IGenre,
    price: number,
    author: BookAuthor,
    rating?: number,
    reviews?: IReview[],
  ) {
    this.name = name;
    this.genre = genre;
    this.price = price;
    this.author = author;
    if (reviews) {
      this.reviews = reviews;
      if (this.reviews.length > 0) {
        const reviewSum = this.reviews.reduce((sum, review) => {
          return sum + review[1];
        }, 0);
        this.rating = reviewSum / this.reviews.length;
      } else {
        this.rating = null;
      }
    } else {
      reviews = [];
    }
  }

  getProductDescription(): string {
    return `Book "${this.name}" by ${this.author.firstName}
${this.author.lastName}`;
  }
}

// export const getFrom: (shelf: Book[], bookName: string) => Book = (
//   shelf: Book[],
//   bookName: string,
// ) => {
//   const book = shelf.find(item => {
//     return item.name === bookName;
//   });
//
//   if (!book) {
//     throw Error(`There is no book with name ${bookName} on the shelf.`);
//   }
//
//   return book;
// };

export function getFromShelf(shelf: Book[], bookName: string): Book {
  const book = shelf.find(item => {
    return item.name === bookName;
  });

  if (!book) {
    throw Error(`There is no book with name ${bookName} on the shelf.`);
  }

  return book;
}
