const recipes = require("../data/recipes.json");

async function getAll(req, res) {
  res.json(recipes);
}

async function getByIngredient(req, res) {
  const { ingredient } = req.query;

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.ingredients.includes(ingredient);
  });
  res.json(filteredRecipes);
}

module.exports = { getAll, getByIngredient };