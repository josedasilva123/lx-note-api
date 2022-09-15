import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
import { HandleErrors } from "../../middlewares/handleErrors";
import { Validate } from "../../middlewares/handleValidation";
import NoteControllers from "./NoteControllers";
import { noteCreateValidation, noteDeleteValidation } from "./NoteValidations";

const router = express.Router();


//Criar notas
router.post('/', Validate, noteCreateValidation(), Authenticate, HandleErrors(NoteControllers.Create));

//Carregar notas do usuário
router.get("/", Authenticate, HandleErrors(NoteControllers.GetUserNotes));

//Excluir nota
router.delete("/:noteId", Validate, noteDeleteValidation(), Authenticate, HandleErrors(NoteControllers.Delete));

export default router;