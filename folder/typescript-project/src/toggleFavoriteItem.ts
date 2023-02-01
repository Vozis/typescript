import { favoriteItems, User } from './types.js';
import { getFavoritesAmount, getUserData } from './lib.js';
import { Place } from './store/domain/types.js';
import { renderUserBlock } from './user.js';

export function toggleFavoriteItem() {
  const favoriteButtons = document.querySelectorAll('.favorites');
  favoriteButtons.forEach(button => {
    button.addEventListener(
      'click',
      event => {
        const target = event.target as HTMLElement;
        let favoritePlaces = [];
        const listEl = target.closest('.result');
        const elName = listEl
          .querySelector('.result-info--header')
          .querySelector('p').textContent;

        const favoritePlacesFromStorage = JSON.parse(
          localStorage.getItem('favoriteItems'),
        );
        const places = JSON.parse(localStorage.getItem('places'));

        const favoriteEl: Place = places.find(place => place.name === elName);

        if (favoritePlacesFromStorage == null) {
          favoritePlaces = [
            {
              id: favoriteEl.originalId,
              name: favoriteEl.name,
              imgUrl: favoriteEl.image,
            },
          ];
          target.classList.add('active');
          localStorage.setItem('favoriteItems', JSON.stringify(favoritePlaces));
        } else {
          const foundFavoritePlace = favoritePlacesFromStorage.find(
            el => el.id === favoriteEl.originalId,
          );
          if (foundFavoritePlace) {
            favoritePlaces = favoritePlacesFromStorage.filter(
              item => item.id !== favoriteEl.originalId,
            );
            target.classList.remove('active');
            localStorage.setItem(
              'favoriteItems',
              JSON.stringify(favoritePlaces),
            );
          } else {
            favoritePlaces = [
              ...favoritePlacesFromStorage,
              {
                id: favoriteEl.originalId,
                name: favoriteEl.name,
                imgUrl: favoriteEl.image,
              },
            ];
            target.classList.add('active');
            localStorage.setItem(
              'favoriteItems',
              JSON.stringify(favoritePlaces),
            );
          }
        }
        const user = getUserData() as User;
        renderUserBlock(user.userName, user.avatarUrl, +getFavoritesAmount());
      },
      {
        once: true,
      },
    );
  });
}

export const isFavorite = place => {
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));

  if (favoriteItems == null) {
    return '';
  }

  const foundEl = favoriteItems.find(el => el.id === place.originalId);
  if (foundEl) {
    return 'active';
  }
  return '';
};
