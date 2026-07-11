import type Podcast from './Podcast';

export default function renderCards(podcasts: Array<Podcast>, parent: HTMLElement | null) {
  podcasts.forEach((item) => {
    let card = `
      <article class="card" id="${item.id}">
        <img class="card-img" src="${item.image}" alt="${item.title}">
        <h2 class="card-title">${item.title}</h2>
        <h2 class="card-subtitle">${item.publisher}</h2>
      </article>
    `

    parent?.insertAdjacentHTML('beforeend', card);
  });
}; 