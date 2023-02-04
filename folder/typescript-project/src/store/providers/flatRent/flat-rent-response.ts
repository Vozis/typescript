export class Flat {
  constructor(
    public id: string,
    public title: string,
    public details: string,
    public photos: string[],
    public coordinates: number[],
    public bookedDates: [],
    public totalPrice: number,
  ) {}

  get price(): number {
    return this.totalPrice;
  }
}

// export interface Flat {
//   id: string;
//   title: string;
//   details: string;
//   photos: string[];
//   coordinates: number[];
//   bookedDates: [];
//   price: number;
// }

export interface FlatListResponse {
  items: Flat[];
  errorMessage?: string;
}

export interface FlatResponse {
  errorMessage?: string;
  item: Flat;
}
