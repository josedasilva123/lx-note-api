const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();
const NoteControllers = require("../controllers/noteControllers");

//Criar notas
router.post('/', authenticate, NoteControllers.Create);

//Carregar notas do usuário
router.get("/", authenticate, NoteControllers.GetUserNotes);

//Excluir nota
router.delete("/:noteId", authenticate, NoteControllers.Delete);

module.exports = router;