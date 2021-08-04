const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

// Commentaires

// Create
// router.post("/recupImage", multer, postCtrl.newComment);

// Read
// router.get("/recupImage", multer, postCtrl.getAllComments);

// Update
//router.put("/recupImage", post.Ctrl. "")

// Delete
// router.delete("/recupImage", auth, postCtrl.deleteComment);

// Posts

//Create
router.post("/recupImage", multer, postCtrl.newPost);

// Read
// router.get("/recupImage", multer, postCtrl.getAllPost);
// router.get("/recupImage", multer, postCtrl.getOnePost);
// router.get("/recupImage", multer, postCtrl.getUserPosts);

// Update
// router.put("/recupImage", multer, postCtrl.modifyOnePost);

// Delete
// router.delete("/recupImage", multer, postCtrl.deleteOnePost);

module.exports = router;
