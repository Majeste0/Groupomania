const db = require("../connection/database");
var sanitize = require("mongo-sanitize"); // Permet d'éviter les envoi de scripts lors de la connection
const bcrypt = require("bcrypt"); // Permet de hasher les données
const { cpuUsage } = require("process");

const mysql = require("mysql");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement

exports.signup = (req, res) => {
  console.log(req.body);
  var clean = sanitize(req.body); // Création d'une variable qui contient "req.body" en s'assurant qu'il n'y ai plus de script à l'intérieur

  let regexpPassword = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/ // Règle pour le mot de passe. Au moins 1 Majuscule / 1 Minuscule / 1 chiffre / 1 symbole / entre 7 et 15 caractères
  );

  let ok = true;

  //On vérifie si les champs sont bien rempli par l'utilisateur

  ok = ok && req.body && req.body.username;
  ok = ok && req.body && req.body.password;

  console.log("first ok : " + ok);
  console.log("current mail is : ", req.body.username);

  if (ok) {
    ok = ok && req.body.username.length > 0;
    ok = ok && req.body.password.length > 8;
    ok = ok && regexpPassword.test(req.body.password); // Vérification si le mot de passe est conforme au RegExp

    console.log("second ok : " + ok);
    console.log("current mail is : ", req.body.username);

    if (ok) {
      // Une fois que l'on c'est assuré que les Identifiants était au bon format, on passe au hash
      bcrypt.hash(clean.password, 10).then((hash) => {
        const user = {
          username: clean.username,
          password: hash,
        };
        var connection = mysql.createConnection({
          host: process.env.Database_HOST,
          user: process.env.Database_USER,
          password: process.env.Database_PASSWORD || "",
          database: process.env.Database_NAME,
        });
        try {
          connection.query(
            `INSERT INTO USERS(username, password) VALUES("${user.username}", "${user.password}")`
          );
          res.status(201).send({ msg: "Created User" });
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
};
