const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/deleteUser", userCtrl.deleteUser);

module.exports = router;

// const connect = require(database.js)
