"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authenticate_1 = require("../../middlewares/authenticate");
var handleErrors_1 = require("../../middlewares/handleErrors");
var handleValidation_1 = require("../../middlewares/handleValidation");
var NoteControllers_1 = __importDefault(require("./NoteControllers"));
var NoteValidations_1 = require("./NoteValidations");
var router = express_1.default.Router();
//Criar notas
router.post('/', handleValidation_1.Validate, (0, NoteValidations_1.noteCreateValidation)(), authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(NoteControllers_1.default.Create));
//Carregar notas do usuário
router.get("/", authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(NoteControllers_1.default.GetUserNotes));
//Excluir nota
router.delete("/:noteId", handleValidation_1.Validate, (0, NoteValidations_1.noteDeleteValidation)(), authenticate_1.Authenticate, (0, handleErrors_1.HandleErrors)(NoteControllers_1.default.Delete));
exports.default = router;
