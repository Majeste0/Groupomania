const express = require("express");
const bodyParser = require("body-parser"); // Nous permet d'extraire un objet JSON d'une requête POST
const app = express(); // Pour utiliser express
const stuffRoutes = require("./routes/stuff.js");
const userRoutes = require("./routes/user");
const path = require("path"); // Fournit des utilitaires pour travailler avec des documents et des fichiers
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement

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
app.use("/api/sauces", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
