import { FavoriteItem, User } from './types.js';
import { getFavoritesAmount, getUserData } from './lib.js';
import { Place } from './store/domain/types.js';
import { renderUserBlock } from './user.js';
import { getDataFromLocalStorage } from './utils.js';

export function toggleFavoriteItem() {
  const favoriteButtons = document.querySelectorAll('.favorites');
  favoriteButtons.forEach(button => {
    button.addEventListener(
      'click',
      (event: Event) => {
        const target = <HTMLElement>event.target;
        let favoritePlaces: FavoriteItem[] = [];
        const listEl = target.closest('.result');

        const elId = (listEl as HTMLElement)?.getAttribute('data-originalid');
        const elName =
          listEl?.firstElementChild?.lastElementChild?.firstElementChild
            ?.firstElementChild?.textContent;
        const elImg =
          listEl?.firstElementChild?.firstElementChild?.lastElementChild;
        const elImgUrl = (<HTMLImageElement>elImg).currentSrc;

        const favoritePlacesFromStorage: FavoriteItem[] | null =
          getDataFromLocalStorage<FavoriteItem[]>('favoriteItems');

        // const places: Place[] = JSON.parse(
        //   localStorage.getItem('places') || '',
        // ) as Place[];

        // const favoriteEl = places.find(place => place.name === elName);

        if (!elId || !elName || !elImgUrl) {
          return;
        }

        if (favoritePlacesFromStorage == null) {
          favoritePlaces = [
            {
              id: elId,
              name: elName,
              imgUrl: elImgUrl,
            },
          ];
          target.classList.add('active');
          localStorage.setItem('favoriteItems', JSON.stringify(favoritePlaces));
        } else {
          const foundFavoritePlace = favoritePlacesFromStorage.find(
            el => el.id === elId,
          );
          if (foundFavoritePlace) {
            favoritePlaces = favoritePlacesFromStorage.filter(
              item => item.id !== elId,
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
                id: elId,
                name: elName,
                imgUrl: elImgUrl,
              },
            ];
            target.classList.add('active');
            localStorage.setItem(
              'favoriteItems',
              JSON.stringify(favoritePlaces),
            );
          }
        }
        const user = <User>getUserData();
        renderUserBlock(user.userName, user.avatarUrl, +getFavoritesAmount());
      },
      {
        once: true,
      },
    );
  });
}

// ТУТ ошибка
export function isFavorite(place: Place): string {
  const favoriteItems: FavoriteItem[] | null =
    getDataFromLocalStorage<FavoriteItem[]>('favoriteItems');

  if (favoriteItems == null) {
    return '';
  }

  const foundEl = favoriteItems.find(el => el.id === place.originalId);
  if (foundEl) {
    return 'active';
  }
  return '';
}
