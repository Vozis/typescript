import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { Place, SearchFilter } from './store/domain/types.js';
import {
  renderEmptyOrErrorSearchBlock,
  renderSearchResults,
  renderSearchResultsHeader,
} from './search-results.js';
import { renderToast } from './lib.js';
import { FlatRentProvider } from './store/providers/flatRent/flat-rent-provider.js';
import { FormElements, SearchFormData } from './types.js';

export let isBookPossible = true;

export function checkForm(form: Element | null): void {
  if (form == null) {
    return;
  }
  form.addEventListener(
    'submit',
    (event: Event) => {
      event.preventDefault();
      const elements = (<FormElements>event.currentTarget).elements;

      const values: SearchFormData = {
        city: elements.city['value'],
        checkInDate: elements.checkin['value'],
        checkOutDate: elements.checkout['value'],
        price: elements.price['value'],
        coordinates: elements.coordinates['value'],
        provider: elements.provider,
      };
      localStorage.setItem('values', JSON.stringify(values));
      if (values !== null) {
        search(values);

        localStorage.setItem('isBookPossible', JSON.stringify(true));
        const timerId = setTimeout(() => {
          renderToast(
            {
              text: 'Информация устарела. Обновите данные поиска',
              type: 'warning',
            },
            {
              name: 'Понял',
              handler: () => {
                console.log('Уведомление закрыто');
              },
            },
          );
          localStorage.setItem('isBookPossible', JSON.stringify(false));
          clearTimeout(timerId);
        }, 10000);
      }
    },
    { once: true },
  );
}

async function search(values: SearchFormData): Promise<void> {
  const homy = new HomyProvider();
  const flatRent = new FlatRentProvider();

  const filter: SearchFilter = {
    city: values.city,
    coordinates: values.coordinates,
    checkInDate: new Date(values.checkInDate),
    checkOutDate: new Date(values.checkOutDate),
    priceLimit: +values.price,
  };

  Promise.all([homy.find(filter), flatRent.find(filter)])
    .then(results => {
      const allResults: Place[] = [...results[0], ...results[1]];

      if (allResults.length === 0) {
        renderEmptyOrErrorSearchBlock(
          'По вашему запросу не найдено подходящих вариантов',
        );
      } else {
        renderSearchResultsHeader();
        let renderPlace: Place[] = [];
        allResults.forEach(result => {
          values.provider['forEach']((provider: HTMLFormElement) => {
            if (provider['checked'] && result.isProvideBy(provider['value'])) {
              renderPlace.push(result);
            }
          });
        });
        renderSearchResults(renderPlace);
        localStorage.setItem('places', JSON.stringify(renderPlace));
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
