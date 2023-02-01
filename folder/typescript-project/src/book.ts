import { SearchFormData } from './types';
import { HomyProvider } from './store/providers/homy/homy-provider.js';
import { FlatRentProvider } from './store/providers/flatRent/flat-rent-provider.js';
import { BookParams, Place, SearchFilter } from './store/domain/types.js';
import { renderToast } from './lib.js';

let isBooking = true;

export function book() {
  const bookButtons = document.querySelectorAll('#book');
  const homy = new HomyProvider();
  const flatRent = new FlatRentProvider();

  bookButtons.forEach(button => {
    button.addEventListener(
      'click',
      (event: Event) => {
        const target = event.target as HTMLElement;
        const listEl = target.closest('.result');
        const elName = listEl
          .querySelector('.result-info--header')
          .querySelector('p').textContent;
        const places = JSON.parse(localStorage.getItem('places'));
        const values = JSON.parse(localStorage.getItem('values'));
        let place: Place = places.find(place => place.name === elName);
        places.filter(item => item.id !== place.id);
        const params: BookParams = {
          place,
          checkInDate: new Date(values.checkInDate),
          checkOutDate: new Date(values.checkOutDate),
        };

        if (place.provider === 'homy') {
          homy.book(params).then(result => {
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

        if (place.provider === 'flat-rent') {
          flatRent
            .book(
              params.place.originalId,
              params.checkInDate,
              params.checkOutDate,
            )
            .then(result => {
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
      },
      {
        once: true,
      },
    );
  });
}
