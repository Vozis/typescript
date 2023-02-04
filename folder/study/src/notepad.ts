import { IProduct } from './product';

export class Notepad implements IProduct {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getProductDescription(): string {
    return `Notepad "${this.name}"`;
  }
}
