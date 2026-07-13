(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://listen-api-test.listennotes.com/api/v2/best_podcasts?sort=recent_published_first&page=1`,t=`https://listen-api-test.listennotes.com/api/v2/podcasts/`,n=`https://listen-api-test.listennotes.com/api/v2/`;async function r(e){try{return await(await fetch(e,{method:`GET`,headers:{Accept:`application/json`}})).json()}catch{return r(`${n}trending_searches`)}}function i(e,t){t&&(t.innerHTML=``),e.forEach(e=>{let n=`
      <article class="card" id="${e.id}">
        <img class="card-img" src="${e.image}" alt="${e.title}">
        <h2 class="card-title">${e.title}</h2>
        <h3 class="card-subtitle">${e.publisher}</h3>
      </article>
    `;t?.insertAdjacentHTML(`beforeend`,n)})}async function a(e){return await(await fetch(e,{method:`GET`,headers:{Accept:`application/json`}})).json()}async function o(e,n){let r=e.target,i=await a(`${t}${r.closest(`.card`)?.id}`),o=i.episodes;if(r.closest(`.card`))if(n)n.innerHTML=``,n.innerHTML=`
        <header class="header__btn">
          <span class="header__btn-title">Home</span>
        </header>
        <div class="podcast-face">
          <div class="main-header-card">
            <img class="main-header-img" src="${i.image}" alt="${i.title}">
            <h2 class="main-header-title">${i.title}</h2>
          </div>
          <div class="podcast-description">
            <h1 class="podcast-description__title">${i.title}</h1>
            <p class="podcast-description__description">
              ${i.description}
            </p>
            <div class="podcast-description__btn">
              <img class="podcast-description__play" src="./assets/play__two.png" alt="Play button">
              <span class="podcast-description__play-title">Play</span>
            </div>
            
          </div>
        </div>
        
        <div class="episode-main" id="episodes">

        </div>
      `,o.forEach(e=>{let t=`
          <article class="episode-main-card" id="${e.id}">
            <img class="episode-main-img" src="${e.image}" alt="${e.title}">
            <h2 class="episode-main-title">${e.title}</h2>
          </article>
        `;document.querySelector(`#episodes`)?.insertAdjacentHTML(`beforeend`,t)});else return i;return i}async function s(t,i,a){let o=await r(e);return t.key===`Enter`&&a&&(i&&(i.innerHTML=``),o=await r(`${n}search?q=<${a.value}>&type=podcast`),console.log(o)),o}document.querySelector(`#app`).innerHTML=`
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
`;var c=document.querySelector(`.container`),l=document.querySelector(`.main`);i((await r(e)).podcasts,document.querySelector(`.main`)),l?.addEventListener(`click`,e=>o(e,c));var u=document.querySelector(`.header__search`);u?.addEventListener(`keydown`,e=>s(e,document.querySelector(`.main`),u));