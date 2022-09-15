import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
import { HandleErrors } from "../../middlewares/handleErrors";
import { Validate } from "../../middlewares/handleValidation";
import UserControllers from "./UserControllers";
import { userLoginValidation, userRegisterValidation } from "./UserValidations";

const router = express.Router();

//Register
router.post("/", Validate, userRegisterValidation() , HandleErrors(UserControllers.Register));

//Login
router.post("/login", Validate, userLoginValidation() , HandleErrors(UserControllers.Login));

//Autologin
router.get("/autologin", Authenticate, HandleErrors(UserControllers.AutoLogin));

export default router;
