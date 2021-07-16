const mysql = require("mysql");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement

module.exports = () => {
  var connection = mysql.createConnection({
    host: process.env.Database_HOST,
    user: process.env.Database_USER,
    password: process.env.Database_PASSWORD || "",
    database: process.env.Database_NAME,
  });

  connection.connect();

  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );

  connection.end();
};
