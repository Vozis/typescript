export interface Flat {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: number[];
  bookedDates: [];
  totalPrice: number;
}

export interface FlatListResponse {
  items: Flat[];
  errorMessage?: string;
}

export interface FlatResponse {
  errorMessage?: string;
  item: Flat;
}
