// import renderEpisodes from './renderEpisodes';
import type Episode from './Episode';
import type Episodes from './Episodes';
import getEpisodes from './getEpisodes';
import { EPISODES_URL } from './API_VARS';

export default async function cardListener(
  event: MouseEvent,
  // episodes: Array<Episode>,
  parent: HTMLElement | null,
): Promise<Episodes> {
  
  const target = event.target as HTMLElement;
  const data: Episodes = await getEpisodes(`${EPISODES_URL}${target.closest('.card')?.id}`);
  const episodes: Array<Episode> =  data.episodes;

  console.log(data);
  if (target.closest('.card')) {
    if (parent) {
      parent.innerHTML = '';

      parent.innerHTML = `
        <header class="header">
          <h1 class="header__title">
            World of Podcasts!
          </h1>
        </header>
        <div class="podcast-face">
          <div class="main-header-card">
            <img class="main-header-img" src="${data.image}" alt="${data.title}">
            <h2 class="main-header-title">${data.title}</h2>
          </div>
          <div class="podcast-description">
            <h1 class="podcast-description__title">${data.title}</h1>
            <p class="podcast-description__description">
              ${data.description}
            </p>
            <div class="podcast-description__btn">
              <img class="podcast-description__play" src="./assets/play__two.png" alt="Play button">
              <span class="podcast-description__play-title">Play</span>
            </div>
            
          </div>
        </div>
        
        <div class="episode-main" id="episodes">

        </div>
      `;

      // parent?.insertAdjacentHTML('beforeend', card);
      episodes.forEach((item) => {
        let card = `
          <article class="episode-main-card" id="${item.id}">
            <img class="episode-main-img" src="${item.image}" alt="${item.title}">
            <h2 class="episode-main-title">${item.title}</h2>
          </article>
        `
        
        document.querySelector('#episodes')?.insertAdjacentHTML('beforeend', card);
      });
    } else {
      return data;
    }
  }

  return data;
}