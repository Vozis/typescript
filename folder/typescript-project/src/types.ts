import { Place } from './store/domain/types.js';

export interface SearchFormData {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
  coordinates: [number, number];
  provider: any[];
}

export class User {
  userName: string;
  avatarUrl: string;
}

export class FavoritesAmounts {
  favoritesAmount: number;
}

export class favoriteItems {
  favoriteItems: Place[];
}
