import getData from "./getData";
import { BASIC_URL, DATA_URL } from "./API_VARS";
import type Data from "./Data";

export default async function inputSearch(
  event: KeyboardEvent,
  parent: HTMLElement | null,
  input: HTMLInputElement
): Promise<Data> {
  let data = await getData(DATA_URL);
  if (event.key === 'Enter' && input) {
    if (parent) {
      parent.innerHTML = '';
    }
    // console.log(input.value)
    data = await getData(`${BASIC_URL}search?q=<${input.value}>&type=podcast`);
    console.log(data)
  }

  return data;
}