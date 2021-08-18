const fs = require("fs");
const app = require("../app");
const connect = require("../connection/database.js");
const path = require("path");
const { connection } = require("../connection/database");
const { compareSync } = require("bcrypt");

exports.newPost = (req, res, err) => {
  try {
    connect.connection.query(
      `INSERT INTO posts(userid, username, title, message, image, karma) VALUES ('${
        req.body.id
      }', '${req.body.username}', '${req.body.title}', '${
        req.body.message
      }', '${req.file.filename}', '${0}')`
    );
    res.status(201).send({ msg: "Post crée" });
  } catch (err) {
    console.log(err);
  }
};

exports.getOnePosts = (req, res, next) => {
  if (req.params.id == undefined) {
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

exports.getAllPostAdmin = (req, res, next) => {
  connect.connection.query(
    `SELECT * FROM posts ORDER BY karma ASC `,

    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.getOneUser = (req, res, next) => {
  connect.connection.query(
    `SELECT * FROM users WHERE users.id = ${req.body.id}`,
    function (error, results) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.deleteOnePost = (req, res, next) => {
  try {
    connect.connection.query(`DELETE FROM posts WHERE id='${req.body.postid}'`);
    res.status(201).send({ msg: "Deleted Post" });
  } catch (err) {
    console.log(err);
  }
};

exports.modifyOnePost = (req, res, next) => {
  try {
    connect.connection.query(
      `UPDATE posts SET title = '${req.body.title}', message = '${req.body.message}' WHERE posts.id = '${req.body.id}'`
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
      `INSERT INTO commentaires(userid, postid, message, username) VALUES ('${req.body.userid}', '${req.body.postid}', '${req.body.message}', '${req.body.username}')`
    );
    res.status(201).send({ msg: "Commentaire crée" });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllComments = (req, res, next) => {
  connect.connection.query(
    `SELECT * FROM commentaires WHERE commentaires.postid = ${req.params.id} ORDER BY id DESC`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
};

exports.deleteCom = (req, res, next) => {
  try {
    connect.connection.query(
      `DELETE FROM commentaires WHERE commentaires.id = ${req.body.comid}`
    );
    res.status(201).send({ msg: "Commentaire supprimé" });
  } catch (err) {
    console.log(err);
  }
};

exports.karma = (req, res, next) => {
  connect.connection.query(
    `SELECT posts.id from posts,likes WHERE posts.id=likes.postid`,
    (err, resultat, fields) => {
      console.log(resultat);
      let ids = resultat.map((el) => el.id);
      console.log(ids);
      for (let cur of ids) {
        connect.connection.query(
          `UPDATE posts SET karma = (SELECT SUM(valeur) FROM likes WHERE likes.postid = '${cur}') WHERE posts.id = '${cur}'`
        );
      }
    }
  );
  next();
};

exports.likes = (req, res, next) => {
  try {
    connect.connection.query(
      `INSERT INTO likes(userid, postid, valeur) VALUES 
      ('${req.body.userid}', '${req.body.postid}', '${req.body.like}')
      ON DUPLICATE KEY 
      UPDATE valeur = '${req.body.like}' 
      `
    );
    res.status(201).send({ msg: "Post évalué" });
  } catch (err) {
    console.log(err);
  }
};
/*WHERE userid = '${req.body.userid}' 
      AND postid = '${req.body.postid}'*/
