import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { documentActions } from './document-actions.js';
import { addDays } from './date-format.js';
import { getFavoritesAmount } from './lib.js';

const minDate = new Date();
const startDate = addDays(minDate, 1);
const endDate = addDays(minDate, 2);

window.addEventListener('DOMContentLoaded', () => {
  localStorage.clear();
  renderUserBlock('User', './img/avatar.png', +getFavoritesAmount());
  renderSearchFormBlock(startDate, endDate);
  renderSearchStubBlock();

  document.addEventListener('click', documentActions);
});
