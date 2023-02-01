import { Provider } from '../../domain/provider.js';
import { BookParams, Place, SearchFilter } from '../../domain/types.js';
import { HttpHelper } from '../../helpers/http-helper.js';
import {
  Place as HomyPLace,
  PlaceListResponse,
  PlaceResponse,
} from './homy-response.js';
import { dateToUnixStamp } from '../../../date-format.js';

export class HomyProvider implements Provider {
  public static provider = 'homy';
  private static apiUrl = 'http://localhost:3030';

  public async find(filter: SearchFilter): Promise<Place[]> {
    return await HttpHelper.fetchAsJson<HomyPLace[]>(
      HomyProvider.apiUrl +
        '/places?' +
        this.convertFilterToQueryString(filter),
    ).then(response => {
      this.assertIsValidResponse(response);
      return this.convertPlaceListResponse(response);
    });
  }

  // public getById(id: string): Promise<Place> {
  //   return HttpHelper.fetchAsJson<Place>(
  //     HomyProvider.apiUrl + '/places/' + id,
  //   ).then(response => {
  //     // this.assertIsValidResponse(response);
  //
  //     return this.convertPlaceResponse(response);
  //   });
  // }

  public book(params: BookParams): Promise<Place> {
    return HttpHelper.fetchAsJson<Place>(
      HomyProvider.apiUrl +
        `/places/${params.place.originalId}?` +
        this.convertBookToQueryString(params),
      {
        method: 'PATCH',
      },
    ).then(response => {
      this.assertIsValidResponse(response);
      return this.convertPlaceResponse(response);
    });
  }

  private assertIsValidResponse(response: any): void {
    if (response.name && response.name === 'BadRequest') {
      throw new Error(response.message);
    }
  }

  private convertFilterToQueryString(filter: SearchFilter): string {
    return (
      `checkInDate=${dateToUnixStamp(filter.checkInDate)}` +
      `&checkOutDate=${dateToUnixStamp(filter.checkOutDate)}` +
      `&coordinates=${filter.coordinates}` +
      `&maxPrice=${filter.priceLimit}`
    );
  }

  private convertBookToQueryString(params: BookParams): string {
    return (
      `checkInDate=${dateToUnixStamp(params.checkInDate)}` +
      `&checkOutDate=${dateToUnixStamp(params.checkOutDate)}`
    );
  }

  private convertPlaceResponse(item: HomyPLace): Place {
    return new Place(
      HomyProvider.provider,
      String(item.id),
      item.image,
      item.name,
      item.description,
      item.bookedDates,
      item.price,
      item.availableDates,
      item.remoteness,
    );
  }

  private convertPlaceListResponse(response: HomyPLace[]): Place[] {
    return response.map((item: HomyPLace) => {
      return this.convertPlaceResponse(item);
    });
  }
}
