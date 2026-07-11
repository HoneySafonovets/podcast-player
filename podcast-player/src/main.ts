import './scss/main.scss';
import getData from './ts/getData';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <h1 class="title">
    Hello world!
  </h1>
</div>
`;

const data = await getData();
console.log(data.podcasts)