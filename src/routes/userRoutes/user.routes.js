import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
const UserControllers = require("../../controllers/userControllers");

const router = express.Router();

//Register
router.post("/", UserControllers.Register);

//Login
router.post("/login", UserControllers.Login);

//Autologin
router.post("/autologin", Authenticate, UserControllers.AutoLogin);

export default router;
