export enum City {
  Spb = 'Санкт-Петербург',
  Moscow = 'Москва',
  Samara = 'Самара',
}

export class Place {
  constructor(
    public readonly provider: string,
    public readonly originalId: string,
    public readonly image: string,
    public readonly name: string,
    public readonly description: string,
    public bookedDates: number[],
    public readonly price: number,
    public readonly remoteness: number,
  ) {}

  get id(): string {
    return `${this.provider}-${this.originalId}`;
  }

  get providerName() {
    return this.provider;
  }

  public isProvideBy(providerName: string): boolean {
    return this.provider === providerName;
  }
}

export interface SearchFilter {
  city: string;
  coordinates: string;
  checkInDate: Date;
  checkOutDate: Date;
  priceLimit: number;
}

export interface BookParams {
  checkInDate: Date;
  checkOutDate: Date;
  flatId: string;
}
