const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();
const UserControllers = require("../controllers/userControllers");

//Register
router.post("/", UserControllers.Register);

//Login
router.post("/login", UserControllers.Login);

//Autologin
router.post("/autologin", authenticate, UserControllers.AutoLogin);

module.exports = router;
