import { FavoriteItem, User } from './types.js';
import { getDataFromLocalStorage } from './utils.js';

export function renderBlock(elementId: string, html: string): void {
  const element = document.getElementById(elementId);
  (<HTMLElement>element).innerHTML = html;
}

interface MessageToast {
  type: string;
  text: string;
}

interface ActionToast {
  name: string;
  handler: () => void;
}

export function renderToast(
  message: MessageToast | null,
  action?: ActionToast | null,
) {
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
  const favoriteList: FavoriteItem[] | null =
    getDataFromLocalStorage<FavoriteItem[]>('favoriteItems');
  favoritesAmount = favoriteList?.length || 0;
  localStorage.setItem('favoritesAmount', JSON.stringify(favoritesAmount));
  return favoritesAmount;
}

export const getUserData = () => {
  let user: unknown = getDataFromLocalStorage<unknown>('user');

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
