import { BookParams, Place, SearchFilter } from './types.js';

export interface Provider {
  find(filter: SearchFilter): Promise<Place[]>;

  book(params: BookParams): Promise<Place>;

  // getById(id: string): Promise<Place>;
}
