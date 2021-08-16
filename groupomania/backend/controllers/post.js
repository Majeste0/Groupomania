const fs = require("fs");
const app = require("../app");
const connect = require("../connection/database.js");
const path = require("path");
const { connection } = require("../connection/database");
const { compareSync } = require("bcrypt");

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

exports.getOnePosts = (req, res, next) => {
  if (req.params.id == undefined) {
    console.log("test");
    connect.connection.query(
      `SELECT * FROM posts WHERE posts.id = ${25}`,
      function (error, results) {
        if (error) throw error;
        res.send(results);
      }
    );
  }
};
exports.getOnePost = (req, res, next) => {
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
    `SELECT * FROM posts ORDER BY id DESC `,

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
    `SELECT * FROM commentaires WHERE commentaires.postid = ${req.params.id} ORDER BY id DESC`,
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

exports.like = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.like);
  /*
  connect.connection.query(
    `SELECT * FROM posts WHERE posts.id = ${25}`,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );*/
  /*
  connect.connection.query(
    `SELECT * FROM likes WHERE likes.userid = ${req.body.userid} AND likes.postid = ${req.body.postid}`,

    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      //console.log(results);
    }
  );
*/
  let x = connect.connection.query(
    `SELECT valeur FROM likes WHERE likes.userid = ${req.body.userid} AND likes.postid = ${req.body.postid}`
  );
  console.log(x);

  if (req.body.like === 1) {
    if (x === undefined) {
      try {
        connect.connection.query(
          `INSERT INTO likes(userid, postid, valeur) VALUES ('${
            req.body.userid
          }', '${req.body.postid}', '${1}' )`
        );
        res.status(201).send({ msg: "Post liké" });
      } catch (err) {
        console.log(err);
      }
    }
    if (x === 1) {
      //rien
    }
    if (x === -1) {
      try {
        connect.connection.query(
          `UPDATE likes SET valeur = ${1} WHERE likes.userid = ${
            req.body.userid
          } AND likes.postid = ${req.body.postid}`
        );
        res.status(201).send({ msg: "Like modifié" });
      } catch (err) {
        console.log(err);
      }
    }
  }

  if (req.body.like === -1) {
    if (x === undefined) {
      try {
        connect.connection.query(
          `INSERT INTO likes(userid, postid, valeur) VALUES ('${
            req.body.userid
          }', '${req.body.postid}', '${-1}' )`
        );
        res.status(201).send({ msg: "Post liké" });
      } catch (err) {
        console.log(err);
      }
    }
    if (x === 1) {
      //rien
    }

    if (x === -1) {
      try {
        connect.connection.query(
          `UPDATE likes SET valeur = ${-1} WHERE likes.userid = ${
            req.body.userid
          } AND likes.postid = ${req.body.postid}`
        );
        res.status(201).send({ msg: "Like modifié" });
      } catch (err) {
        console.log(err);
      }
    }
  }

  /*
    try {
      connect.connection.query(
        `INSERT INTO likes(userid, postid, valeur) VALUES ('${
          req.body.userid
        }', '${req.body.postid}', '${1}' )`
      );
      res.status(201).send({ msg: "Post liké" });
    } catch (err) {
      console.log(err);
    }
  }
  if (req.body.like === -1) {
    try {
      connect.connection.query(
        `INSERT INTO likes(userid, postid, valeur) VALUES ('${
          req.body.userid
        }', '${req.body.postid}', '${-1}' )`
      );
      res.status(201).send({ msg: "Post disliké" });
    } catch (err) {
      console.log(err);
    }
  }
  */
};

exports.adminPosts = (req, res, next) => {
  connect.connection.query(
    `SELECT * FROM posts ORDER BY id DESC `,

    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};
