const express = require("express");
const bodyParser = require("body-parser"); // Nous permet d'extraire un objet JSON d'une requête POST
const app = express(); // Pour utiliser express
require("dotenv").config();
const db = require("./connexion/database");
const mysql = require("mysql");
/* const stuffRoutes = require("./routes/stuff.js");
const userRoutes = require("./routes/user");
const path = require("path"); // Fournit des utilitaires pour travailler avec des documents et des fichiers
*/
// ----- CORS ----- Permet d'autoriser les requêtes
console.log(
  process.env.Database_HOST,
  process.env.Database_USER,
  process.env.Database_PASSWORD,
  process.env.Database_NAME,
  db
);
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
/*
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", stuffRoutes);
app.use("/api/auth", userRoutes);

*/
module.exports = app;
