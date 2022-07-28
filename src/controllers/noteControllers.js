const { ObjectId } = require("mongodb");
const Note = require('../models/Note');

async function Create(req, res) {
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
}

async function GetUserNotes(req, res) {
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
}

async function Delete(req, res) {
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
}

module.exports = {
    Create, 
    GetUserNotes,
    Delete
}