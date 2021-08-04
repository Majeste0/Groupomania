const fs = require("fs");
const app = require("../app");
const connect = require("../connection/database.js");
const path = require("path");
const { connection } = require("../connection/database");

exports.newPost = (req, res, err) => {
  console.log(req.body.title + " title");
  console.log(req.body.message + " message");
  console.log(req.file.filename + " image");
  console.log(req.params.id + " params.id");
  console.log(req.body + " req.body");

  try {
    connect.connection.query(
      `INSERT INTO posts(userid, title, message, image) VALUES ('${3}', '${
        req.body.title
      }', '${req.body.message}', '${req.file.filename}')`
    );
    res.status(201).send({ msg: "Post crée" });
  } catch (err) {
    console.log(err);
  }
};

exports.getOnePost = (req, res, next) => {
  try {
    connect.connection.query(
      `SELECT * FROM posts WHERE posts.id = ${req.params.id}`
    );
    res.status(201).send({ msg: "Post récupéré" });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllPost = (req, res, next) => {
  try {
    res.status(201).send({ msg: "Post récupéré" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOnePost = (req, res, next) => {
  try {
    connect.connection.query(
      `DELETE FROM posts WHERE posts.id = ${req.params.id}`
    );
    res.status(201).send({ msg: "Post supprimé" });
  } catch (err) {
    console.log(err);
  }
};

exports.modifyOnePost = (req, res, next) => {
  try {
    connect.connection.query(
      `UPDATE posts(title,message) SET  ${req.body.title}, ${req.body.message} WHERE posts.id = ${req.params.id}`
    );
    res.status(201).send({ msg: "Post modifié" });
  } catch (err) {
    console.log(err);
  }
};

exports.getUserPosts = (req, res, next) => {
  try {
    connect.connection.query(
      `SELECT * FROM posts WHERE posts.userid = ${req.params.id}`
    );
    res.status(201).send({ msg: "Post de l'utilisateur récupéré" });
  } catch (err) {
    console.log(err);
  }
};

exports.newComment = (req, res, next) => {
  try {
    connect.connection.query(
      `INSERT INTO commentaires(USERID,POSTID,MESSAGE) VALUES ${req.body.userId}, ${req.params.id}, ${req.body.content}`
    );

    res.status(201).send({ msg: "Post récupéré" });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllComments = (req, res, next) => {
  try {
    res.status(201).send({ msg: "Post récupéré" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteComment = (req, res, next) => {
  try {
    connect.connection.query(
      `DELETE FROM commentaires WHERE comments.id = ${req.params.id}`
    );
    res.status(201).send({ msg: "Post récupéré" });
  } catch (err) {
    console.log(err);
  }
};
