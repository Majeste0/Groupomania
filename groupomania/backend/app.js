const express = require("express");
const bodyParser = require("body-parser"); // Nous permet d'extraire un objet JSON d'une requête POST
const app = express(); // Pour utiliser express
require("dotenv").config();

const userRoutes = require("./routes/user");

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
app.use("/api/auth", userRoutes);

module.exports = app;
