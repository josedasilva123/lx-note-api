import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
import { Validate } from "../../middlewares/handleValidation";
import { userLoginValidation, userRegisterValidation } from "./UserValidations";
const UserControllers = require("../../controllers/userControllers");

const router = express.Router();

//Register
router.post("/", Validate, userRegisterValidation() , UserControllers.Register);

//Login
router.post("/login", Validate, userLoginValidation() ,UserControllers.Login);

//Autologin
router.get("/autologin", Authenticate, UserControllers.AutoLogin);

export default router;
