import express from "express"
import { Authenticate } from "../../middlewares/authenticate";
const NoteControllers = require("../../controllers/noteControllers");

const router = express.Router();


//Criar notas
router.post('/', Authenticate, NoteControllers.Create);

//Carregar notas do usuário
router.get("/", Authenticate, NoteControllers.GetUserNotes);

//Excluir nota
router.delete("/:noteId", Authenticate, NoteControllers.Delete);

export default router;