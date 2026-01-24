const BASE_URL = "https://rickandmortyapi.com/api/character";

export async function getHeroes() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch heroes");
  }
  const data = await response.json();
  return data.results;
}

/*
   I tried to get data about the hero by ID, but faced some interesting behavior:
   Some characters were displayed, while others threw a “Failed fetching data” error from Heroes.jsx
   The problem is "Access to fetch has been blocked by CORS"

   As I understand, public APIs do not always return headers
*/

// export async function getHeroById(id) {
//   const response = await fetch(`${BASE_URL}/${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch hero");
//   }
//   return response.json();
// }
