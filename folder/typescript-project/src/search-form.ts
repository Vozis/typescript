import { addDays, addMonths, formatDate } from './date-format.js';
import { renderBlock } from './lib.js';

export function renderSearchFormBlock(startDate: Date, endDate: Date) {
  const minDate = new Date();
  const maxDate = addMonths(minDate, 1);

  renderBlock(
    'search-form-block',
    `
    <form id='search-form'>
      <fieldset class='search-filedset'>
        <div class='row'>
          <div>
            <label for='city'>Город</label>
            <input id='city' type='text' disabled value='Санкт-Петербург' />
            <input id='coordinates' type='text' value='59.9386,30.3141' />
          </div>
          <div class='providers'>
            <label><input type='checkbox' id='homy' name='provider' value='homy' checked /> Homy</label>
            <label><input type='checkbox' id='flat' name='provider' value='flat-rent' checked /> FlatRent</label>
          </div>
        </div>
        <div class='row'>
          <div>
            <label for='check-in-date'>Дата заезда</label>
            <input id='check-in-date' type='date' value='${formatDate(
              startDate,
            )}' min='${formatDate(minDate)}' max='${formatDate(
      maxDate,
    )}' name='checkin' />
          </div>
          <div>
            <label for='check-out-date'>Дата выезда</label>
            <input id='check-out-date' type='date' value='${formatDate(
              endDate,
            )}' min='${formatDate(minDate)}' max='${formatDate(
      maxDate,
    )}' name='checkout' />
          </div>
          <div>
            <label for='max-price'>Макс. цена суток</label>
            <input id='max-price' type='number' min='100' max='30000' value='' name='price' class='max-price' required/>
          </div>
          <div>
            <div><button id='find-button'>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `,
  );
}
