import {
  FlatListResponse,
  FlatResponse,
} from './store/providers/flatRent/flat-rent-response.js';
import { Place, SearchFilter } from './store/domain/types.js';

export class FlatRentSdk {
  get(id: string): FlatResponse;

  search(parameters: SearchFilter): Promise<FlatListResponse[]>;

  book(flatId: string, checkInDate: Date, checkOutDate: Date): Place;
}
