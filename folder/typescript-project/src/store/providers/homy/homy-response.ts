export interface Place {
  id: string;
  image: string;
  name: string;
  description: string;
  bookedDates: number[];
  price: number;
  availableDates?: any;
  remoteness?: number | 0;
}

export interface PlaceListResponse {
  items: Place[];
  errorMessage?: string;
}

export interface PlaceResponse {
  // errorMessage?: string;
  // item: Place;
}
