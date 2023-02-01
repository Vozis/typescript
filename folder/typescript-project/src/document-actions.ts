import { checkForm } from './search.js';
import { book } from './book.js';
import { getUserData } from './lib.js';
import { toggleFavoriteItem } from './toggleFavoriteItem.js';
import { sortPlaces } from './sortPlaces.js';

export function documentActions(event) {
  const targetElement: HTMLElement = event.target;

  if (targetElement && targetElement.id === 'find-button') {
    const form = document.querySelector('#search-form');
    checkForm(form);
  }

  if (targetElement && targetElement.id === 'book') {
    book();
  }

  if (targetElement && targetElement.classList.contains('favorites')) {
    toggleFavoriteItem();
  }

  if (targetElement && targetElement.id === 'sort') {
    const sort: HTMLSelectElement = document.querySelector('#sort');
    sort.addEventListener(
      'change',
      (event: Event) => {
        const target = event.target as HTMLFormElement;
        sortPlaces(target.value);
      },
      {
        once: true,
      },
    );
  }
}
