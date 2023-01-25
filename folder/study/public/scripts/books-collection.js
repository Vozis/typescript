import { CollectionNew } from './collection.js';
export const reviews = [
    ['John', 5, 'It is my favorite book'],
    ['Mary', 3, 'I expected more from it :('],
    ['Clara', 5, 'Read it again and again!'],
];
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
export class ProductCollection extends CollectionNew {
    get price() {
        let totalPrice = 0;
        const keys = Object.getOwnPropertyNames(this.items);
        for (const key of keys) {
            const item = this.items[key];
            totalPrice += item.price;
        }
        return totalPrice;
    }
}
export class BookCollection extends ProductCollection {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MtY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib29rcy1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWM7SUFDaEMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLHdCQUF3QixDQUFDO0lBQ3JDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSw0QkFBNEIsQ0FBQztJQUN6QyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsMEJBQTBCLENBQUM7Q0FDekMsQ0FBQztBQU1GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFFSCxvRUFBb0U7QUFFcEU7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUVKLG9FQUFvRTtBQUVwRSxNQUFNLE9BQU8saUJBQXNDLFNBQVEsYUFBZ0I7SUFDekUsSUFBSSxLQUFLO1FBQ1AsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxQjtRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxjQUFlLFNBQVEsaUJBQXVCO0NBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi9ib29rLmpzJztcbmltcG9ydCB7IElHZW5yZSwgSVJldmlldyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbk5ldyB9IGZyb20gJy4vY29sbGVjdGlvbi5qcyc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcyc7XG5cbmV4cG9ydCBjb25zdCByZXZpZXdzOiBJUmV2aWV3W10gPSBbXG4gIFsnSm9obicsIDUsICdJdCBpcyBteSBmYXZvcml0ZSBib29rJ10sXG4gIFsnTWFyeScsIDMsICdJIGV4cGVjdGVkIG1vcmUgZnJvbSBpdCA6KCddLFxuICBbJ0NsYXJhJywgNSwgJ1JlYWQgaXQgYWdhaW4gYW5kIGFnYWluISddLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uPFQ+IHtcbiAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuLypleHBvcnQgY29uc3QgcHJvZ3JhbW1pbmdMaXRlcmF0dXJlOiBDb2xsZWN0aW9uPEJvb2s+ID0ge1xuICBDcmFja2luZzogbmV3IEJvb2soXG4gICAgJ0NyYWNraW5nJyxcbiAgICBJR2VucmUuUHJvZ3JhbW1pbmcsXG4gICAgMzIwLFxuICAgIHsgZmlyc3ROYW1lOiAnUycsIGxhc3ROYW1lOiAnVm92YScgfSxcbiAgICA1LFxuICAgIHJldmlld3MsXG4gICksXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbVNoZWxmTmV3KFxuICBzaGVsZjogQ29sbGVjdGlvbjxCb29rPixcbiAgYm9va05hbWU6IHN0cmluZyxcbik6IEJvb2sge1xuICBjb25zdCBib29rID0gc2hlbGZbYm9va05hbWVdO1xuXG4gIGlmICghYm9vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gYm9vayBuYW1lZCAke2Jvb2t9YCk7XG4gIH1cbiAgcmV0dXJuIGJvb2s7XG59Ki9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLypleHBvcnQgY29uc3QgcHJvZ3JhbW1pbmdMaXRlcmF0dXJlTWFwOiBDb2xsZWN0aW9uTmV3PEJvb2ssIHN0cmluZz4gPVxuICBuZXcgQ29sbGVjdGlvbk5ldygpO1xuXG5wcm9ncmFtbWluZ0xpdGVyYXR1cmVNYXAuc2V0KFxuICAnQ3JhY2tpbmcnLFxuICBuZXcgQm9vayhcbiAgICAnQ3JhY2tpbmcnLFxuICAgIElHZW5yZS5Qcm9ncmFtbWluZyxcbiAgICAzMjAsXG4gICAgeyBmaXJzdE5hbWU6ICdTJywgbGFzdE5hbWU6ICdWb3ZhJyB9LFxuICAgIDUsXG4gICAgcmV2aWV3cyxcbiAgKSxcbik7Ki9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDb2xsZWN0aW9uPFQgZXh0ZW5kcyBJUHJvZHVjdD4gZXh0ZW5kcyBDb2xsZWN0aW9uTmV3PFQ+IHtcbiAgZ2V0IHByaWNlKCk6IG51bWJlciB7XG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLml0ZW1zKTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2tleV07XG4gICAgICB0b3RhbFByaWNlICs9IGl0ZW0ucHJpY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvdGFsUHJpY2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvb2tDb2xsZWN0aW9uIGV4dGVuZHMgUHJvZHVjdENvbGxlY3Rpb248Qm9vaz4ge31cbiJdfQ==