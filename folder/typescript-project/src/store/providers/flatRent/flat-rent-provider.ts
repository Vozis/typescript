import { Provider } from '../../domain/provider.js';
import { BookParams, Place, SearchFilter } from '../../domain/types.js';
import { HttpHelper } from '../../helpers/http-helper.js';
import { dateToUnixStamp } from '../../../date-format.js';
import { FlatRentSdk } from '../../../flat-rent-sdk.js';

import { Flat, FlatListResponse, FlatResponse } from './flat-rent-response.js';

const flatRentSdk = new FlatRentSdk();

export class FlatRentProvider implements Provider {
  public static provider = 'flat-rent';

  // private static apiUrl = 'http://localhost:3040?';

  public async find(filter: SearchFilter): Promise<Place[]> {
    const response = await flatRentSdk.search(filter);
    return this.convertPlaceListResponse(<FlatListResponse[]>response);
  }

  // public async getById(id: string): Promise<Place> {
  //   const response: FlatListResponse = await flatRentSdk.getById(id);
  //   this.assertIsValidResponse(response);
  //   return this.convertPlaceResponse(response);
  // }

  public async book(params: BookParams): Promise<Place> {
    const response: any = await flatRentSdk.book(params);
    console.log(response);
    this.assertIsValidResponse(response);
    return this.convertPlaceResponse(response);
  }

  private assertIsValidResponse(response: any): void {
    if (response.errorMessage != null) {
      throw new Error(response.errorMessage);
    }
  }

  private convertPlaceResponse(item: Flat): Place {
    return new Place(
      FlatRentProvider.provider,
      String(item.id),
      item.photos[0],
      item.title,
      item.details,
      item.bookedDates,
      item.totalPrice,
    );
  }

  private convertPlaceListResponse(response: FlatListResponse[]): Place[] {
    return response.map((item: any) => {
      return this.convertPlaceResponse(item);
    });
  }
}
