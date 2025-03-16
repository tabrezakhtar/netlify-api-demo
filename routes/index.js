const express = require("express");
const router = express.Router();
const recipeRoutes = require("./recipes");

router.get("/", recipeRoutes.getAll);
router.get("/filter/", recipeRoutes.getByIngredient);

module.exports = router;