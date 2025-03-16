const express = require("express");
const router = express.Router();
const recipeRoutes = require("./recipes");

router.get("/recipes/", recipeRoutes.getAll);
router.get("/recipesFilter/", recipeRoutes.getByIngredient);

module.exports = router;