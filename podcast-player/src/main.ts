import './scss/main.scss';
import { DATA_URL } from './ts/API_VARS';
import getData from './ts/getData';
import type Episode from './ts/Episode';
import getEpisodes from './ts/getEpisodes';
import renderCards from './ts/renderCards';
import cardListener from './ts/cardListener';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <h1 class="title">
    World of Podcasts!
  </h1>
  <main class="main">
  </main>
</div>
`;




const main = document.querySelector<HTMLDivElement>('.main');
// Get Data
const data = await getData(DATA_URL);

// Render Episodes
// const episodes = await getEpisodes(`${EPISODES_URL}${data.id}`);
// console.log(episodes)

renderCards(data.podcasts, document.querySelector(`.main`));
main?.addEventListener('click',  (event) => cardListener(event, main));

