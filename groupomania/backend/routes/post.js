const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

// -- Posts --

router.post("/recupImage", multer, postCtrl.newPost);

router.get("/allPosts", multer, postCtrl.karma, postCtrl.getAllPost);

router.get("/allPostsAdmin", multer, postCtrl.karma, postCtrl.getAllPostAdmin);

router.get("/:id", multer, postCtrl.getOnePost);

router.get("/admin/:id", multer, postCtrl.getOnePost);

router.put("/modifyPost", postCtrl.modifyOnePost);

router.post("/newCommentaire", postCtrl.newComment);

router.get("/allComments/:id", multer, postCtrl.getAllComments);

router.post("/likes/", postCtrl.likes);

router.delete("/deletePost", postCtrl.deleteOnePost);

router.post("/isAdmin", postCtrl.getOneUser);

router.delete("/deleteCom", postCtrl.deleteCom);

module.exports = router;
