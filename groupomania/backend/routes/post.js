const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

// -- Posts --

router.post("/recupImage", multer, postCtrl.newPost);

router.get("/allPosts", multer, postCtrl.getAllPost);

router.get("/:id", multer, postCtrl.getOnePost);

router.get("/:ids", multer, postCtrl.getOnePosts);

router.put("/modifyPost", postCtrl.modifyOnePost);

router.post("/newCommentaire", postCtrl.newComment);

router.get("/allComments/:id", multer, postCtrl.getAllComments);

router.post("/likes/", postCtrl.like);

router.get("/adminPosts", postCtrl.adminPosts);

module.exports = router;
