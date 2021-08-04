const mysql = require("mysql");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement


  var connection = mysql.createConnection({
    host: process.env.Database_HOST,
    user: process.env.Database_USER,
    password: process.env.Database_PASSWORD || "",
    database: process.env.Database_NAME,
  });

//  connection.connect();

//  connection.end();

  exports.connection = connection;