const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require("./routes");
app.use("/api/", apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});