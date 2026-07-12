import type Podcast from "./Podcast";

export default interface Data {
  id: number,
  name: string,
  total: number,
  has_next: Boolean,
  podcasts: Array<Podcast>
}