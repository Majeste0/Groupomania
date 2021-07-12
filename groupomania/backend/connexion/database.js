const mysql = require("mysql");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement

const connection = mysql.createConnection({
  host: process.env.Database_HOST,
  user: process.env.Database_USER,
  password: process.env.Database_PASSWORD,
  database: process.env.Database_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Vous êtes connecté à la base de données !");
});
