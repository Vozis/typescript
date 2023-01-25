import { Book } from './book.js';
import { IGenre, IReview } from './types.js';
import { CollectionNew } from './collection.js';
import { IProduct } from './product.js';

export const reviews: IReview[] = [
  ['John', 5, 'It is my favorite book'],
  ['Mary', 3, 'I expected more from it :('],
  ['Clara', 5, 'Read it again and again!'],
];

export interface Collection<T> {
  [key: string]: T;
}

/*export const programmingLiterature: Collection<Book> = {
  Cracking: new Book(
    'Cracking',
    IGenre.Programming,
    320,
    { firstName: 'S', lastName: 'Vova' },
    5,
    reviews,
  ),
};

export function getFromShelfNew(
  shelf: Collection<Book>,
  bookName: string,
): Book {
  const book = shelf[bookName];

  if (!book) {
    throw new Error(`There is no book named ${book}`);
  }
  return book;
}*/

// =================================================================

/*export const programmingLiteratureMap: CollectionNew<Book, string> =
  new CollectionNew();

programmingLiteratureMap.set(
  'Cracking',
  new Book(
    'Cracking',
    IGenre.Programming,
    320,
    { firstName: 'S', lastName: 'Vova' },
    5,
    reviews,
  ),
);*/

// =================================================================

export class ProductCollection<T extends IProduct> extends CollectionNew<T> {
  get price(): number {
    let totalPrice = 0;
    const keys = Object.getOwnPropertyNames(this.items);

    for (const key of keys) {
      const item = this.items[key];
      totalPrice += item.price;
    }

    return totalPrice;
  }
}

export class BookCollection extends ProductCollection<Book> {}
