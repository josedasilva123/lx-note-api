"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var handleErrors_1 = require("../../middlewares/handleErrors");
var handleValidation_1 = require("../../middlewares/handleValidation");
var UserControllers_1 = __importDefault(require("./UserControllers"));
var UserValidations_1 = require("./UserValidations");
var router = express_1.default.Router();
//Register
router.post("/", handleValidation_1.Validate, (0, UserValidations_1.userRegisterValidation)(), (0, handleErrors_1.HandleErrors)(UserControllers_1.default.Register));
//Login
router.post("/login", handleValidation_1.Validate, (0, UserValidations_1.userLoginValidation)(), (0, handleErrors_1.HandleErrors)(UserControllers_1.default.Login));
//Autologin
router.get("/autologin", authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(UserControllers_1.default.AutoLogin));
exports.default = router;
