export class Book {
    constructor(name, genre, price, author, rating, reviews) {
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
            }
            else {
                this.rating = null;
            }
        }
        else {
            reviews = [];
        }
    }
    getProductDescription() {
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
export function getFromShelf(shelf, bookName) {
    const book = shelf.find(item => {
        return item.name === bookName;
    });
    if (!book) {
        throw Error(`There is no book with name ${bookName} on the shelf.`);
    }
    return book;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sT0FBTyxJQUFJO0lBUWYsWUFDRSxJQUFZLEVBQ1osS0FBYSxFQUNiLEtBQWEsRUFDYixNQUFrQixFQUNsQixNQUFlLEVBQ2YsT0FBbUI7UUFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3BELE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQy9DO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO0VBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBRUQsc0VBQXNFO0FBQ3RFLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsU0FBUztBQUNULHNDQUFzQztBQUN0QyxxQ0FBcUM7QUFDckMsUUFBUTtBQUNSLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsMkVBQTJFO0FBQzNFLE1BQU07QUFDTixFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLEtBQUs7QUFFTCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtJQUMxRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsTUFBTSxLQUFLLENBQUMsOEJBQThCLFFBQVEsZ0JBQWdCLENBQUMsQ0FBQztLQUNyRTtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSYXRpbmdhYmxlIH0gZnJvbSAnLi9yYXRpbmdhYmxlLmpzJztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi9wcm9kdWN0LmpzJztcbmltcG9ydCB7IEJvb2tBdXRob3IsIElHZW5yZSwgSVJldmlldyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgSUF1dGhvciB9IGZyb20gJy4vYXV0aG9yLmpzJztcblxuZXhwb3J0IGNsYXNzIEJvb2sgaW1wbGVtZW50cyBJUmF0aW5nYWJsZSwgSVByb2R1Y3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIGdlbnJlOiBJR2VucmU7XG4gIHByaWNlOiBudW1iZXI7XG4gIHJldmlld3M6IElSZXZpZXdbXTtcbiAgYXV0aG9yOiBCb29rQXV0aG9yO1xuICByYXRpbmc6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgZ2VucmU6IElHZW5yZSxcbiAgICBwcmljZTogbnVtYmVyLFxuICAgIGF1dGhvcjogQm9va0F1dGhvcixcbiAgICByYXRpbmc/OiBudW1iZXIsXG4gICAgcmV2aWV3cz86IElSZXZpZXdbXSxcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdlbnJlID0gZ2VucmU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgIGlmIChyZXZpZXdzKSB7XG4gICAgICB0aGlzLnJldmlld3MgPSByZXZpZXdzO1xuICAgICAgaWYgKHRoaXMucmV2aWV3cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJldmlld1N1bSA9IHRoaXMucmV2aWV3cy5yZWR1Y2UoKHN1bSwgcmV2aWV3KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN1bSArIHJldmlld1sxXTtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHRoaXMucmF0aW5nID0gcmV2aWV3U3VtIC8gdGhpcy5yZXZpZXdzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmF0aW5nID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV2aWV3cyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGdldFByb2R1Y3REZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgQm9vayBcIiR7dGhpcy5uYW1lfVwiIGJ5ICR7dGhpcy5hdXRob3IuZmlyc3ROYW1lfVxuJHt0aGlzLmF1dGhvci5sYXN0TmFtZX1gO1xuICB9XG59XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRGcm9tOiAoc2hlbGY6IEJvb2tbXSwgYm9va05hbWU6IHN0cmluZykgPT4gQm9vayA9IChcbi8vICAgc2hlbGY6IEJvb2tbXSxcbi8vICAgYm9va05hbWU6IHN0cmluZyxcbi8vICkgPT4ge1xuLy8gICBjb25zdCBib29rID0gc2hlbGYuZmluZChpdGVtID0+IHtcbi8vICAgICByZXR1cm4gaXRlbS5uYW1lID09PSBib29rTmFtZTtcbi8vICAgfSk7XG4vL1xuLy8gICBpZiAoIWJvb2spIHtcbi8vICAgICB0aHJvdyBFcnJvcihgVGhlcmUgaXMgbm8gYm9vayB3aXRoIG5hbWUgJHtib29rTmFtZX0gb24gdGhlIHNoZWxmLmApO1xuLy8gICB9XG4vL1xuLy8gICByZXR1cm4gYm9vaztcbi8vIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tU2hlbGYoc2hlbGY6IEJvb2tbXSwgYm9va05hbWU6IHN0cmluZyk6IEJvb2sge1xuICBjb25zdCBib29rID0gc2hlbGYuZmluZChpdGVtID0+IHtcbiAgICByZXR1cm4gaXRlbS5uYW1lID09PSBib29rTmFtZTtcbiAgfSk7XG5cbiAgaWYgKCFib29rKSB7XG4gICAgdGhyb3cgRXJyb3IoYFRoZXJlIGlzIG5vIGJvb2sgd2l0aCBuYW1lICR7Ym9va05hbWV9IG9uIHRoZSBzaGVsZi5gKTtcbiAgfVxuXG4gIHJldHVybiBib29rO1xufVxuIl19