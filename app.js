const express = require('express');
const app = express();
const apiRoutes = require("./routes");
app.use("/api/", apiRoutes);
module.exports = app;