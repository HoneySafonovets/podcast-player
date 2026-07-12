import type Episode from './Episode';

export default interface Episodes {
  id: string,
  title: string,
  image: string,
  description: string,
  episodes: Array<Episode>,
}