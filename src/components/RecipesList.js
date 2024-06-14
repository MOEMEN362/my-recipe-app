import React, { useState, useEffect } from 'react';
import { fetchRecipesByCategory, fetchRecipeById } from '../services/mealDbApi';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [selectedCategory]);

  const fetchRecipes = async () => {
    try {
      const data = await fetchRecipesByCategory(selectedCategory);
      setRecipes(data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      const recipe = await fetchRecipeById(recipeId);
      setSelectedRecipe(recipe);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="recipes-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.idMeal}>
            <button onClick={() => handleRecipeClick(recipe.idMeal)}>
              {recipe.strMeal}
            </button>
          </li>
        ))}
      </ul>

      {selectedRecipe && (
        <div className="recipe-details">
          <h3>{selectedRecipe.strMeal}</h3>
          <p>{selectedRecipe.strInstructions}</p>
          {/* Ajoutez d'autres détails de la recette selon votre besoin */}
        </div>
      )}
    </div>
  );
}

export default RecipesList;
