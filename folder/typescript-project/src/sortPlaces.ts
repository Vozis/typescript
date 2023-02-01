import { renderSearchResults } from './search-results.js';

export function sortPlaces(value: string): void {
  const places = JSON.parse(localStorage.getItem('places'));

  switch (value) {
    case 'minToMax':
      places.sort((a, b) => a.price - b.price);
      renderSearchResults(places);
      break;
    case 'maxToMin':
      places.sort((a, b) => b.price - a.price);
      renderSearchResults(places);
      break;
    case 'close':
      places.sort((a, b) => a.remoteness - b.remoteness);
      renderSearchResults(places);
      break;
  }
}
