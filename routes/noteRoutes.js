const express = require("express");
const authenticate = require("./middlewares/authenticate");

const { ObjectId } = require("mongodb");

//Middlewares
const router = express.Router();

//Models
const Note = require('../models/Note');

//Criar notas
router.post('/', authenticate, async (req, res) => {
    try {
        const { title, text, user } = req.body; 

        if(!title || !text){
            throw new Error("Desculpe, algum parâmetro está faltando.")
        }

        const date = new Date();

        const note = {
            userID: user.id,
            title,
            text,
            createdAt: date,
            updatedAt: date,
        }       

        const response = await Note.create(note);
        res.status(200).json({ message: "Nota criada com sucesso!", response})
    } catch (error) {
        res.status(400).json({ error: error.message})
    }    
})


//Carregar notas do usuário
router.get("/", authenticate, async(req, res) => {
    try {
        const { id } = req.body.user;
        const response = await Note.find({ userID: id });

        if(!response){
            throw new Error('Ainda não há nenhuma nota cadastrada.');
        }
        
        res.status(200).json({ response })
    } catch (error) {
        res.status(400).json({ error: error.message})   
    }
})

//Excluir nota
router.delete("/:noteId", authenticate, async(req, res) => {
    try {
        const { noteId } = req.params; 

        if(!noteId){
            throw new Error("Desculpe, algum parâmetro está faltando.");
        }

        const currentNote = await Note.findOne({ _id: ObjectId(noteId)});

        if(!currentNote){
            throw new Error("Desculpe, nenhuma nota foi encontrada.");
        }

        const { id } = req.body.user;

        if(currentNote.userID !== id){
            throw new Error("Desculpe, está nota percente a outro usuário."); 
        }
        
        await Note.deleteOne({ _id: ObjectId(noteId)});
        res.status(200).json({ message: "Nota foi excluida com sucesso!"})

    } catch (error) {
        res.status(400).json({ error: error.message})  
    }    
})

module.exports = router;