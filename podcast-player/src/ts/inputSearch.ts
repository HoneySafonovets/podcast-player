import getData from "./getData";
import { BASIC_URL } from "./API_VARS";

export default function inputSearch(
  event: KeyboardEvent,
  parent: HTMLElement | null,
  input: HTMLInputElement
): void {
  if (event.key === 'Enter' && input) {
    if (parent) {
      parent.innerHTML = '';
    }
    // console.log(input.value)
    getData(`${BASIC_URL}search?q=<${input.value}>&type=podcast`);
  }
}