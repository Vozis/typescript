import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { Place, SearchFilter } from './store/domain/types.js';
import {
  renderEmptyOrErrorSearchBlock,
  renderSearchResults,
  renderSearchResultsHeader,
} from './search-results.js';
import { renderToast } from './lib.js';
import { sortPlaces } from './sortPlaces.js';
import { FlatRentProvider } from './store/providers/flatRent/flat-rent-provider.js';
import { SearchFormData } from './types.js';

export let isBookPossible = true;

export function checkForm(form): void {
  form.addEventListener(
    'submit',
    event => {
      event.preventDefault();
      const elements = event.currentTarget.elements;

      const values: SearchFormData = {
        city: elements.city.value,
        checkInDate: elements.checkin.value,
        checkOutDate: elements.checkout.value,
        price: +elements.price.value,
        coordinates: elements.coordinates.value,
        provider: Array.from(elements.provider),
      };
      console.log(values);
      localStorage.setItem('values', JSON.stringify(values));
      search(values);
    },
    { once: true },
  );
}

function search(values: SearchFormData) {
  const homy = new HomyProvider();
  const flatRent = new FlatRentProvider();

  const filter: SearchFilter = {
    city: values.city,
    coordinates: values.coordinates,
    checkInDate: new Date(values.checkInDate),
    checkOutDate: new Date(values.checkOutDate),
    priceLimit: values.price,
  };

  Promise.all([homy.find(filter), flatRent.find(filter)])
    .then(results => {
      let allResults: Place[] = [].concat(results[0], results[1]);
      if (allResults.length === 0) {
        renderEmptyOrErrorSearchBlock(
          'По вашему запросу не найдено подходящих вариантов',
        );
      } else {
        renderSearchResultsHeader();
        let renderPLace: Place[] = [];
        allResults.forEach(result => {
          values.provider.forEach(provider => {
            if (provider.checked && result.isProvideBy(provider.value)) {
              renderPLace.push(result);
            }
          });
        });
        console.log(renderPLace);
        renderSearchResults(renderPLace);
        localStorage.setItem('places', JSON.stringify(renderPLace));
      }
    })
    .catch(err => {
      console.log(err.message);
      renderToast(
        {
          text: err.message,
          type: 'unsuccessful',
        },
        {
          name: 'Понял',
          handler: () => {
            console.log('Уведомление закрыто');
          },
        },
      );
    });
}
