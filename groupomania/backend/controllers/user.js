const db = require("../connection/database");
var sanitize = require("mongo-sanitize"); // Permet d'éviter les envoi de scripts lors de la connection
const bcrypt = require("bcrypt"); // Permet de hasher les données
const { cpuUsage } = require("process");

const mysql = require("mysql");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement
var connection = mysql.createConnection({
  host: process.env.Database_HOST,
  user: process.env.Database_USER,
  password: process.env.Database_PASSWORD || "",
  database: process.env.Database_NAME,
});

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

exports.login = (req, res, next) => {
  var clean = sanitize(req.body); // Check si il y a des scripts envoyés
  User.findOne({ email: clean.email }) // On recherche l'email de l'utilisateur dans mongoDB
    .then((user) => {
      if (!user) {
        // Si l'on ne retrouve pas son mail dans mongoDB
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(clean.password, user.password) // Bcrypt compare le mot de passe tapé avec celui contenu dans la base de données
        .then((valid) => {
          if (!valid) {
            // Si le mot de passe n'est pas bon
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            // Si le mot de passe est bon cela renvoi une ID + un Token
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              // Génération d'un token qui sera valide 24H
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
