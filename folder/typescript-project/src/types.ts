export interface SearchFormData {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  price: string;
  coordinates: string;
  provider: HTMLFormElement;
}

export class User {
  constructor(public userName: string, public avatarUrl: string) {}
}

export interface FavoritesAmounts {
  favoritesAmount: number;
}

export interface FavoriteItem {
  id: string;
  name: string;
  imgUrl: string;
}

interface MyFormCollection extends HTMLFormControlsCollection {
  city: HTMLFormElement;
  checkin: HTMLFormElement;
  checkout: HTMLFormElement;
  price: HTMLFormElement;
  coordinates: HTMLFormElement;
  provider: HTMLFormElement;
}

export interface FormElements extends HTMLFormElement {
  elements: MyFormCollection;
}
