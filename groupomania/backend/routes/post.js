const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

// router.get("/", auth, postCtrl.getAllPost);
// router.put("/id", auth, multer, postCtrl.modifyPost);
// router.delete("/id", auth, postCtrl.deletePost);
// router.get("/recupImage", multer, postCtrl.getnewGif);
router.post("/recupImage", multer, postCtrl.newPost);

module.exports = router;