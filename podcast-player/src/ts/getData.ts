import type Data from './Data';
import { BASIC_URL } from './API_VARS';

export default async function getData(url: string): Promise<Data> {
  try {
    const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  
  const data: Data = await response.json();

  return data;
  } catch (error) {

    return getData(`${BASIC_URL}trending_searches`);
  }
}