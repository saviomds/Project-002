const express = require("express");
const path = require("path");
require("dotenv/config");

const app = express();
// Middleware to serve static files
app.use(express.static(path.join(__dirname, "Theme")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Theme/Welcome", "index.html"));
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Running On ${port}`));
