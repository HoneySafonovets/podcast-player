import type Data from "./dataInterface";

export default async function getData(): Promise<Data> {
  const url = "https://listen-api-test.listennotes.com/api/v2/best_podcasts?sort=recent_published_first&page=1";
  
  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  
  const data: Data = await response.json();
  
  return data;
}