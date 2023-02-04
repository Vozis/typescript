import { Book } from "./book.js";
import { Genre, Review } from "./types.js";
import { Author } from "./author.js";
import { Notepad } from "./notepad.js";
import { Product } from "./product.js";
import { PurchaseContext } from "./purchase-context.js";
import { OzonProvider } from "./store/providers/ozon/ozon-provider.js";

export { Author } from "./author.js";
export { BookCollection } from "./book-collection.js";
export { Book } from "./book.js";
export { Collection } from "./collection.js";
export { Notepad } from "./notepad.js";
export { Product } from "./product.js";
export { Ratingable } from "./ratingable.js";

const fullAuthor: Author = {
  firstName: "J. K.",
  lastName: "Rowling",
  rating: 4.7,
};

const book = new Book("Harry Potter", Genre.Fantasy, 100, fullAuthor);
console.log(book);
// book.rating = 5;
console.log(book.rating);
// book.addReview(["Joe", 4, "Good one!"]);
console.log(book.rating);

book.addReview(["Joe", 4, "Good one!"]);
const reviewToDelete: Review = ["Sara", 5, ""];
book.addReview(reviewToDelete);
book.removeReview(reviewToDelete);

console.log(book.getReviews(), book.rating);

// =================================================================
// protected

const book2 = new Book("Harry Potter", Genre.Fantasy, 100, fullAuthor);
const notepad = new Notepad("Godric Gryffindor's notepad", 30);

const products: Product[] = [book2, notepad];

const context: PurchaseContext = {
  user: {
    clientLevel: 1,
  },
  cart: {
    items: products.length,
    totalSum: products.reduce((accumulate, currentValue) => {
      return accumulate + currentValue.price;
    }, 0),
  },
};

console.log(
  `${book2.getDiscountPrice(context)} instead of ${book.price}`,
  "\n",
  `${notepad.getDiscountPrice(context)} instead of ${notepad.price}`
);

// =================================================================
// lesson 6

interface RemoveBookFromFavorites {
  // id может быть строкой или числом
  (id: string | number): Promise<string | number>;
}

// но здесь указывается только string
// при этом ошибок не возникает
const removeBook: RemoveBookFromFavorites = (id: string | number) => {
  // здесь должна быть реализация
  return Promise.resolve(id);
};

// false мы передаём вместо id
// это не должно работать
removeBook.call(null, 1);

// в функции можно свободно использовать this
// однако в данной функции контекст не установлен
// и this будет undefined
function printBookSummary(this: Book, printItalic = false) {
  let openingTag = "";
  let closingTag = "";
  if (printItalic) {
    openingTag = "<i>";
    closingTag = "</i>";
  }
  console.log(
    openingTag,
    'Book "' + this.name + '"',
    'in genre "' + this.genre + '"',
    "by " + this.author.firstName + "" + this.author.lastName + ",",
    // this.pages + " pages",
    "- " + this.price + " rub.",
    closingTag
  );
}

// // создадим книгу
// const harryPotter = new Book(
//   OzonProvider.provider,
//   "5",
//   "Harry Potter",
//   Genre.Fantasy,
//   "The boy who lived",
//   1001,
//   { firstName: "J. K.", lastName: "Rowling" }
// );
//
// // печатаем обычным шрифтом
// printBookSummary();
// // печатаем курсивом
// printBookSummary(true);

try {
  throw new Error();
} catch (e) {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log(e);
  }
}

interface SomeStructure {
  // точно известные свойства
  id: string;
  name: string;
  // произвольные параметры, которые могут быть,
  // а могут не быть
  [key: string]: string;
}

Promise.resolve<SomeStructure>({
  id: "5",
  name: "Harry Potter",
  author: "J. K. Rowling",
}).then((book) => {
  // name точно будет существовать, а author и genre не обязательно
  console.log(
    book.name,
    book["author"] == null ? "UNKNOWN" : book["author"].toUpperCase(),
    book["genre"] == null ? "UNKNOWN" : book["genre"].toUpperCase()
  );
});
