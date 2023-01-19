import { renderSearchFormBlock, search } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { getFavoritesAmount, getUserDate, renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('User', './img/avatar.png', 0);
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast({
        text: 'Это пример уведомления. Используйте его при необходимости',
        type: 'success',
    }, {
        name: 'Понял',
        handler: () => {
            console.log('Уведомление закрыто');
        },
    });
    getUserDate('user');
    getFavoritesAmount('favoritesAmount');
    const form = document.getElementById('search-form');
    const cb = (err, result) => {
        setTimeout(() => {
            const chance = Math.random();
            console.log(chance);
            if (chance < 0.5) {
                if (!result)
                    console.log([]);
                else
                    console.log(result);
            }
            else {
                console.log(err);
            }
        }, 2000);
    };
    search(form, cb);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUMvQyxlQUFlLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9DLHFCQUFxQixFQUFFLENBQUM7SUFDeEIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixXQUFXLENBQ1Q7UUFDRSxJQUFJLEVBQUUsMkRBQTJEO1FBQ2pFLElBQUksRUFBRSxTQUFTO0tBQ2hCLEVBQ0Q7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckMsQ0FBQztLQUNGLENBQ0YsQ0FBQztJQUNGLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRXRDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFcEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFVLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO1FBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7O29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrLCBzZWFyY2ggfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJztcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdHMuanMnO1xuaW1wb3J0IHsgZ2V0RmF2b3JpdGVzQW1vdW50LCBnZXRVc2VyRGF0ZSwgcmVuZGVyVXNlckJsb2NrIH0gZnJvbSAnLi91c2VyLmpzJztcbmltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi9saWIuanMnO1xuaW1wb3J0IHsgUGxhY2UgfSBmcm9tICcuL3R5cGVzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHJlbmRlclVzZXJCbG9jaygnVXNlcicsICcuL2ltZy9hdmF0YXIucG5nJywgMCk7XG4gIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpO1xuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKTtcbiAgcmVuZGVyVG9hc3QoXG4gICAge1xuICAgICAgdGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JyxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICfQn9C+0L3Rj9C7JyxcbiAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbiAgZ2V0VXNlckRhdGUoJ3VzZXInKTtcbiAgZ2V0RmF2b3JpdGVzQW1vdW50KCdmYXZvcml0ZXNBbW91bnQnKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XG5cbiAgY29uc3QgY2IgPSAoZXJyOiBFcnJvciwgcmVzdWx0PzogUGxhY2VbXSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgY2hhbmNlID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIGNvbnNvbGUubG9nKGNoYW5jZSk7XG4gICAgICBpZiAoY2hhbmNlIDwgMC41KSB7XG4gICAgICAgIGlmICghcmVzdWx0KSBjb25zb2xlLmxvZyhbXSk7XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH07XG5cbiAgc2VhcmNoKGZvcm0sIGNiKTtcbn0pO1xuIl19