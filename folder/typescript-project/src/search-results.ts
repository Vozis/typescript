import { renderBlock } from './lib.js';
import { Place } from './store/domain/types.js';
import { isFavorite } from './toggleFavoriteItem.js';

export function renderSearchStubBlock(): void {
  renderBlock(
    'search-results-block',
    `
    <div class='before-results-block'>
      <img src='img/start-search.png' />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `,
  );
}

export function renderEmptyOrErrorSearchBlock(reasonMessage: string): void {
  renderBlock(
    'search-results-block',
    `
    <div class='no-results-block'>
      <img src='img/no-results.png' />
      <p>${reasonMessage}</p>
    </div>
    `,
  );
}

function renderOnePlace(place: Place) {
  const isFavoriteEl = isFavorite(place);
  let item = document.createElement('li');
  item.classList.add('result');
  const itemHtml = `
  <div class='result-container'>
          <div class='result-img-container'>
            <div class='favorites ${isFavoriteEl}'></div>
            <img class='result-img' src='${place.image}' alt=''>
          </div>\t
          <div class='result-info'>
            <div class='result-info--header'>
              <p>${place.name}</p>
              <p class='price'>${place.price}</p>
            </div>
            <div class='result-info--map'><i class='map-icon'></i> ${place.remoteness} км от вас</div>
            <div class='result-info--descr'>${place.description}</div>
            <div class='result-info--footer'>
              <div>
                <button id='book'>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
  `;
  item.innerHTML = itemHtml;
  return item;
}

export function renderSearchResults(places: Place[]) {
  const list = document.querySelector('.results-list');
  if (!list) {
    renderSearchResultsHeader();
  }
  list.innerHTML = '';
  places.forEach(place => {
    const listItem = renderOnePlace(place);
    list.appendChild(listItem);
  });
}

export function renderSearchResultsHeader() {
  renderBlock(
    'search-results-block',
    `
    <div class='search-results-header'>
        <p>Результаты поиска</p>
        <div class='search-results-filter'>
            <span><i class='icon icon-filter'></i> Сортировать:</span>
            <select id='sort'>
                <option value='minToMax' selected=''>Сначала дешёвые</option>
                <option value='maxToMin'>Сначала дорогие</option>
                <option value='close'>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class='results-list'></ul>
    `,
  );
}
