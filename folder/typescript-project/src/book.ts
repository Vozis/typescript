import { SearchFormData } from './types';
import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { FlatRentProvider } from './store/providers/flatRent/flat-rent-provider.js';
import { BookParams, Place } from './store/domain/types.js';
import { renderToast } from './lib.js';
import { getDataFromLocalStorage } from './utils.js';

export function book(): void {
  const bookButtons = document.querySelectorAll('#book');
  const homy = new HomyProvider();
  const flatRent = new FlatRentProvider();

  bookButtons.forEach(button => {
    button.addEventListener(
      'click',
      (event: Event) => {
        const target = <HTMLFormElement>event.target;
        const listEl = target.closest('.result');
        const elName =
          listEl?.firstElementChild?.lastElementChild?.firstElementChild
            ?.firstElementChild?.textContent;

        const places = getDataFromLocalStorage<Place[]>('places');
        const values = getDataFromLocalStorage<SearchFormData>('values');

        if (places && values) {
          let place = places.find(place => place.name === elName);

          if (!place) {
            return;
          }

          let params: BookParams = {} as BookParams;
          if (place.provider === 'homy') {
            params = {
              checkInDate: new Date(values.checkInDate),
              checkOutDate: new Date(values.checkOutDate),
              flatId: place.originalId,
            };
          }

          if (place.provider === 'flat-rent') {
            params = {
              checkInDate: new Date(values.checkInDate),
              checkOutDate: new Date(values.checkOutDate),
              flatId: place.originalId,
            };
          }

          let isBookPossible =
            getDataFromLocalStorage<boolean>('isBookPossible');

          if (!isBookPossible) {
            renderToast(
              {
                text: 'Информация устарела. Повторите запрос',
                type: 'warning',
              },
              {
                name: 'Понял',
                handler: () => {
                  console.log('Уведомление закрыто');
                },
              },
            );
          } else {
            if (place.provider === 'homy') {
              homy.book(params).then(result => {
                const newPlaces = [...places, result];
                localStorage.setItem('places', JSON.stringify(newPlaces));
                renderToast(
                  {
                    text: `Бронирование отеля ${result.name} на с ${values.checkInDate} по ${values.checkOutDate} успешно`,
                    type: 'successful',
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

            if (place.provider === 'flat-rent') {
              flatRent.book(params).then(result => {
                console.log(result);
                const newPlaces = [...places, result];
                localStorage.setItem('places', JSON.stringify(newPlaces));
                renderToast(
                  {
                    text: `Бронирование отеля ${result.name} на с ${values.checkInDate} по ${values.checkOutDate} успешно`,
                    type: 'successful',
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
          }
        }
      },
      {
        once: true,
      },
    );
  });
}
