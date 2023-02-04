import { renderSearchResults } from './search-results.js';
import { Place } from './store/domain/types.js';
import { getDataFromLocalStorage } from './utils.js';

export function sortPlaces(value: string): void | null {
  const places: Place[] | null = getDataFromLocalStorage<Place[]>('places');

  if (places == null) {
    return null;
  }
  switch (value) {
    case 'minToMax':
      places.sort((place1, place2) => place1.price - place2.price);
      // console.log('minToMax', places);
      renderSearchResults(places);
      break;
    case 'maxToMin':
      places.sort((place1, place2) => place2.price - place1.price);
      // console.log('maxToMin', places);
      renderSearchResults(places);
      break;
    case 'close':
      places.sort((place1, place2) => place1.remoteness - place2.remoteness);
      // console.log('close', places);
      renderSearchResults(places);
      break;
    default:
      places.sort((place1, place2) => place1.price - place2.price);
      // console.log('minToMax', places);
      renderSearchResults(places);
      break;
  }
}
