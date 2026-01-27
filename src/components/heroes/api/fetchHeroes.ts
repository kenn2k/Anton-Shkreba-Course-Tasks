const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getHeroes() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch heroes");
  }
  const data = await response.json();
  return data.results;
}

export async function getHeroById(id: string) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hero");
  }
  return response.json();
}
