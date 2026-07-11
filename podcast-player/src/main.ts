import './scss/main.scss';
import getData from './ts/getData';
import renderCards from './ts/renderCards';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <h1 class="title">
    World of Podcasts!
  </h1>
  <main class="main">
  </main>
</div>
`;

const data = await getData();

renderCards(data.podcasts, document.querySelector(`.main`))

