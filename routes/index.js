const express = require("express");
const router = express.Router();
const simpleRoutes = require("./simple");

router.get("/simple/", simpleRoutes.get);

module.exports = router;