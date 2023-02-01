// import { addToShelfBunch, showCart, showRating } from './helpers.js';
// import { IProduct } from './product.js ';
// import { IGenre, IReview } from './types.js';
// import { Book, getFromShelf } from './book.js';
// import {
//   getFromShelfNew,
//   programmingLiterature,
//   programmingLiteratureMap,
//   reviews,
// } from './books-collection.js';
// import { CollectionNew } from './collection.js';

/*const books: Book[] = [
  new Book(
    'Harry Potter and Philosopher Stone',
    'fantasy',
    900,
    {
      firstName: 'I',
      lastName: 'S',
    },
    5,
  ),
  // new Book('Warcraft', 'adventure', 650),
  // new Book('Game of thrones', 'drama', 1300),
  // new Book('Adventure', 'fantasy', 320),
];

function findBook(
  genre: string,
  page: number,
  multipleRecommendation = true,
): Book | Book[] {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.price <= page;
  };

  if (multipleRecommendation) {
    return books.filter(findAlgorithm);
  } else {
    return books.find(findAlgorithm);
  }
}*/

// console.log(findBook('fantasy', 1000));

// console.log(serialize(newBook));
// console.log(serialize(null));
// console.log(serialize(undefined));
// console.log(serialize(5));
// console.log(serialize(false));
/*

const newBook = new Book(
  'Adventure',
  IGenre.Fantasy,
  320,
  { firstName: 'I', lastName: 'A' },
  5,
  reviews,
);

const notepad: IProduct = {
  price: 40,
  getProductDescription: () => {
    return 'Notepad with Unicorn, 50 pages';
  },
};

showCart([newBook, notepad]);
// console.log(newBook.price.toFixed(2));
// console.log(newBook);
console.log(showRating(newBook));
console.log(newBook.genre);

addToShelfBunch('favorite', newBook, newBook);

// =================================================================

console.log(getFromShelfNew(programmingLiterature, 'Cracking'));

// const foundBook = getFromMap(programmingLiteratureMap, 'Cracking');
// console.log('from getFromMap(): ', foundBook);

// =================================================================

// const foundBookCollection = getFromMap(programmingLiteratureMap, 'Cracking');
// console.log('from getFromMap() with Collection: ', foundBook);
console.log(programmingLiteratureMap.size);
console.log(programmingLiteratureMap.has('Cracking'));

// =================================================================

new CollectionNew<Book, number>();
new CollectionNew<Book, string>();
new CollectionNew<Book, symbol>();
new CollectionNew<Book>();

// ================================================================
*/
