import { getFavoritesAmount, renderBlock } from './lib.js';
import { FavoritesAmounts } from './types.js';

export function renderUserBlock(
  userName: string,
  avatarUrl: string,
  favoriteItemsAmount: number,
): void {
  localStorage.setItem(
    'user',
    JSON.stringify({ userName: userName, avatarUrl: avatarUrl }),
  );

  const favoritesCaption = favoriteItemsAmount
    ? favoriteItemsAmount
    : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class='header-container'>
      <img class='avatar' src='${avatarUrl}' alt='Wade Warren' />
      <div class='info'>
          <p class='name'>${userName}</p>
          <p class='fav'>
            <i class='heart-icon${
              hasFavoriteItems ? ' active' : ''
            }'></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `,
  );
}
