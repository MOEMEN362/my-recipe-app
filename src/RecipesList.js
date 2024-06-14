import React, { useState, useEffect } from 'react';
import { fetchRecipesByCategory } from '../services/mealDbApi';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Beef'); // Initial category

  useEffect(() => {
    fetchRecipesByCategory(selectedCategory).then((data) => setRecipes(data));
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="recipes-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <button onClick={() => handleCategoryChange(recipe.strCategory)}>{recipe.strMeal}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipesList;
