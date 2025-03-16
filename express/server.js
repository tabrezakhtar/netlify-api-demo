const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const path = require("path");
const app = express();

const corsOptions = {
  origin: "https://resilient-daifuku-4beeb8.netlify.app",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const apiRoutes = require("../routes");
app.use("/recipes/", apiRoutes);
app.use("/.netlify/functions/server/recipes", apiRoutes);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")));

module.exports = app;
module.exports.handler = serverless(app);