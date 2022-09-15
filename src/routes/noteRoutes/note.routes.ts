import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
import { Validate } from "../../middlewares/handleValidation";
import { noteCreateValidation, noteDeleteValidation } from "./NoteValidations";
const NoteControllers = require("../../controllers/noteControllers");

const router = express.Router();


//Criar notas
router.post('/', Validate, noteCreateValidation(), Authenticate, NoteControllers.Create);

//Carregar notas do usuário
router.get("/", Authenticate, NoteControllers.GetUserNotes);

//Excluir nota
router.delete("/:noteId", Validate, noteDeleteValidation(), Authenticate, NoteControllers.Delete);

export default router;