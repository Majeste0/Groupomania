const db = require("../connection/database");
const sanitize = require("mongo-sanitize"); // Permet d'éviter les envoi de scripts lors de la connection
const bcrypt = require("bcrypt"); // Permet de hasher les données
const connect = require("../connection/database.js");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Package nous permettant d'utiliser les variable d'environnement

exports.signup = (req, res) => {
  console.log(req.body + " req.body");
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
          connect.connection.query(
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
  connect.connection.query(
    `SELECT * FROM users WHERE username='${clean.username}'`,
    (err, users, rows) => {
      console.log(users + " users"); // Objet JSON avec la structure de la BDD
      console.log(clean.password + " clean.password");
      console.log(users[0].password + " users[0].password");
      console.log(users[0].username + " users[0].username");
      console.log(clean.username + " clean.username");
      if (!users) {
        // Si l'on ne retrouve pas son username dans la BDD
        res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      console.log(clean.password + " clean.password");
      console.log(users[0].password + " users[0].password");
      console.log(users[0].id + " users[0].id");
      bcrypt
        .compare(clean.password, users[0].password) // Bcrypt compare le mot de passe tapé avec celui contenu dans la base de données
        .then((valid) => {
          if (!valid) {
            // Si le mot de passe n'est pas bon
            res.status(401).json({ message: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            // Si le mot de passe est bon cela renvoi une ID + un Token
            userId: users[0].id,
            token: jwt.sign({ userId: users[0].id }, "RANDOM_TOKEN_SECRET", {
              // Génération d'un token qui sera valide 24H
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error: "ici" }));
    }
  );
};

exports.deleteUser = (req, res, next) => {
  console.log("test");
  console.log(req.body.userid + " r.b.uid");
  console.log(req.body + " r.b.uid");
  console.log(req.body.userid + " r.b.uid");
  try {
    console.log(req.body.userid + " r.b.uid");
    connect.connection.query(`DELETE FROM users WHERE id='${req.body.userid}'`);
    res.status(201).send({ msg: "Deleted User" });
  } catch (err) {
    console.log(err);
  }
};
