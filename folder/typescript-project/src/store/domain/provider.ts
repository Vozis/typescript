import { Place, SearchFilter } from './types';

export interface Provider {
  find(filter: SearchFilter): Promise<Place[]>;

  book(place: Place, dateRange: Date[]): Promise<Place>;

  getById(id: string): Promise<Place>;
}
