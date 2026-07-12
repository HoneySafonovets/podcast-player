import type Episodes from "./Episodes";

export default async function getEpisodes(url: string): Promise<Episodes> {
  const response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    
    const data: Episodes = await response.json();
    
    return data;
}