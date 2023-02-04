import {
  Flat,
  FlatListResponse,
  FlatResponse,
} from './store/providers/flatRent/flat-rent-response.js';
import { BookParams, Place, SearchFilter } from './store/domain/types.js';

export class FlatRentSdk {
  // get(id: string): FlatResponse;

  search(parameters: SearchFilter): Promise<Flat[]>;

  book(params: BookParams): Place;
}
