const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

// -- Posts --

//Create
router.post("/recupImage", multer, postCtrl.newPost);

// Read
router.get("/allPosts", multer, postCtrl.getAllPost);
// router.get("/recupImage", multer, postCtrl.getAllPost);
// router.get("/recupImage", multer, postCtrl.getOnePost);
// router.get("/recupImage", multer, postCtrl.getUserPosts);

// Update
router.put("/modifyPost", postCtrl.modifyOnePost);

// Delete
// router.delete("/recupImage", multer, postCtrl.deleteOnePost);

// -- Commentaires --

// Create
router.post("/newcommentaire", postCtrl.newComment);

// Read
router.get("/allComments", multer, postCtrl.getAllComments);

// Update

// Delete
// router.delete("/recupImage", auth, postCtrl.deleteComment);

module.exports = router;
