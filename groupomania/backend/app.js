const express = require("express");
const bodyParser = require("body-parser"); // Nous permet d'extraire un objet JSON d'une requête POST
const app = express(); // Pour utiliser express
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const path = require("path");
require("dotenv").config();

// ----- CORS ----- Permet d'autoriser les requêtes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// ----- !CORS -----
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/post", postRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
