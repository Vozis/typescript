import { Place } from './store/domain/types';
import { favoriteItems, FavoritesAmounts, User } from './types.js';

export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}

export function renderToast(message, action) {
  let messageText = '';

  if (message != null) {
    messageText = `
      <div id='info-block' class='info-block ${message.type}'>
        <p>${message.text}</p>
        <button id='toast-main-action'>${action?.name || 'Закрыть'}</button>
      </div>
    `;
  }

  renderBlock('toast-block', messageText);

  const button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, null);
    };
  }
}

export function getFavoritesAmount() {
  let favoritesAmount: number = 0;
  const favoriteList = JSON.parse(localStorage.getItem('favoriteItems'));
  // console.log('favoriteList:', favoriteList);
  favoritesAmount = favoriteList?.length || 0;
  console.log('favoritesAmount:', favoritesAmount);
  localStorage.setItem('favoritesAmount', JSON.stringify(favoritesAmount));
  return favoritesAmount;
}

export const getUserData = () => {
  let user: unknown = JSON.parse(localStorage.getItem('user'));

  if (user == null) {
    user = {
      userName: 'Ilya',
      avatarUrl: './img/avatar.png',
    };
    return user;
  }

  if (user instanceof User) {
    return user;
  }

  return user;
};
