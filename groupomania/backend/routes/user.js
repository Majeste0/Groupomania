const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

const userCtrl = require("../controllers/user");
const authCtrl = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/deleteUser", userCtrl.deleteUser);
router.get("/", authCtrl);

module.exports = router;

// const connect = require(database.js)
