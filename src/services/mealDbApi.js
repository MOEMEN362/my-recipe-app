// mealDbApi.js
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function fetchRecipesByCategory(category) {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  return data;
}

export async function fetchRecipeById(recipeId) {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${recipeId}`);
  const data = await response.json();
  return data.meals[0]; // Retourne la première recette trouvée par l'ID
}
