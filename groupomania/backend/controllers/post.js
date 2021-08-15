const fs = require("fs");
const app = require("../app");
const connect = require("../connection/database.js");
const path = require("path");
const { connection } = require("../connection/database");

exports.newPost = (req, res, err) => {
  console.log(req.body);
  try {
    connect.connection.query(
      `INSERT INTO posts(userid, username, title, message, image) VALUES ('${req.body.id}', '${req.body.username}', '${req.body.title}', '${req.body.message}', '${req.file.filename}')`
    );
    res.status(201).send({ msg: "Post crée" });
  } catch (err) {
    console.log(err);
  }
};

exports.getOnePost = (req, res, next) => {
  console.log("a");
  connect.connection.query(
    `SELECT * FROM posts WHERE posts.id = ${req.params.id}`,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.getAllPost = (req, res, next) => {
  connect.connection.query(
    `SELECT * FROM posts `,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
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
      `UPDATE posts SET title = ${req.body.title}, message = ${
        req.body.message
      } WHERE posts.id = ${9}`
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
  console.log(req.body + "r.b");
  console.log(req.body.id + "r.b");
  console.log(req.body.userid + "r.b");
  console.log(req.body.message + "r.b");
  try {
    connect.connection.query(
      `INSERT INTO commentaires(userid, postid, message, username) VALUES ('${req.body.userid}', '${req.body.postid}', '${req.body.message}', '${req.body.username}')`
    );
    res.status(201).send({ msg: "Commentaire crée" });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllComments = (req, res, next) => {
  console.log(req.params.id);
  connect.connection.query(
    `SELECT * FROM commentaires WHERE commentaires.postid = ${req.params.id} `,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
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
/*
exports.like = (req, res, next) => {
  this.getOnePost({ _id: req.params.id }).then((post) => {
    if (req.body.like === 1) {
      this.modifyOnePost(
        {
          _id: req.params.id,
        },
        {
          $push: {
            usersLiked: req.body.userId,
          },
          $inc: {
            likes: +1,
          },
        }
      )
        .then(() =>
          res.status(200).json({
            message: "j'aime ajouté !",
          })
        )
        .catch((error) =>
          res.status(400).json({
            error,
          })
        );
    }
    if (req.body.like === -1) {
      Sauce.updateOne(
        {
          _id: req.params.id,
        },
        {
          $push: {
            usersDisliked: req.body.userId,
          },
          $inc: {
            dislikes: +1,
          },
        }
      )
        .then(() => {
          res.status(200).json({
            message: "Dislike ajouté !",
          });
        })
        .catch((error) =>
          res.status(400).json({
            error,
          })
        );
    }
    if (req.body.like === 0) {
      Sauce.findOne({
        _id: req.params.id,
      })
        .then((sauce) => {
          if (sauce.usersLiked.includes(req.body.userId)) {
            Sauce.updateOne(
              {
                _id: req.params.id,
              },
              {
                $pull: {
                  usersLiked: req.body.userId,
                },
                $inc: {
                  likes: -1,
                },
              }
            )
              .then(() =>
                res.status(200).json({
                  message: "Like retiré !",
                })
              )
              .catch((error) =>
                res.status(400).json({
                  error,
                })
              );
          }
          if (sauce.usersDisliked.includes(req.body.userId)) {
            Sauce.updateOne(
              {
                _id: req.params.id,
              },
              {
                $pull: {
                  usersDisliked: req.body.userId,
                },
                $inc: {
                  dislikes: -1,
                },
              }
            )
              .then(() =>
                res.status(200).json({
                  message: "Dislike retiré !",
                })
              )
              .catch((error) =>
                res.status(400).json({
                  error,
                })
              );
          }
        })
        .catch((error) =>
          res.status(404).json({
            error,
          })
        );
    }
  });
};
*/
