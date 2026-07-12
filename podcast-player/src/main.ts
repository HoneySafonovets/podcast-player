import './scss/main.scss';
import { DATA_URL } from './ts/API_VARS';
import getData from './ts/getData';
// import type Episode from './ts/Episode';
// import getEpisodes from './ts/getEpisodes';
import renderCards from './ts/renderCards';
import cardListener from './ts/cardListener';
import inputSearch from './ts/inputSearch';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <header class="header">
    <h1 class="header__title">
      World of Podcasts!
    </h1>
    <div class="header__input">
      <input type="text" placeholder="What are you want?" name="search" autocomplete="disabled" class="header__search" >
      <button class="header__icon">
        <img src="./assets/Krestiksvgpng.ru_.svg" alt="cross" class="header__icon-item">
      </button>
    </div>
  </header>
  <main class="main"></main>
</div>
`;




const container = document.querySelector<HTMLDivElement>('.container');
// Get Data
const data = await getData(DATA_URL);

// Render Episodes
// const episodes = await getEpisodes(`${EPISODES_URL}${data.id}`);
// console.log(episodes)

renderCards(data.podcasts, document.querySelector(`.main`));
// New content change
container?.addEventListener('click',  (event) => cardListener(event, container));
const input = document.querySelector<HTMLInputElement>('.header__search');

input?.addEventListener('keydown', (event: KeyboardEvent) => inputSearch(event, document.querySelector(`.main`), input));

