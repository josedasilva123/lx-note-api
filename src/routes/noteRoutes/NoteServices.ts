import { ObjectId } from "mongodb";
import Note from "../../models/Note";
import { iCreateBody, iDeleteParams } from "./NoteTypes";
import { iAuthenticateBody } from "../../types/global";

export default class NotesServices{
    static async Create(body: iCreateBody){
        const { title, text, user } = body; 

        const note = {
            userID: user.id,
            title,
            text,
        }       

        const response = await Note.create(note);
        return { message: "Nota criada com sucesso!", response};
    }

    static async Delete(body: iAuthenticateBody, params: iDeleteParams){
        const { noteId } = params; 

          const currentNote = await Note.findOne({ _id: new ObjectId(noteId)});

        if(!currentNote){
            throw new Error("Desculpe, nenhuma nota foi encontrada.");
        }

        const { id } = body.user;

        if(String(currentNote.userID) !== String(id)){
            throw new Error("Desculpe, está nota percente a outro usuário."); 
        }
        
        await Note.deleteOne({ _id: new ObjectId(noteId)});
        return { message: "Nota foi excluida com sucesso!"};
    }

    static async GetUserNotes(body: iAuthenticateBody){
        const { id } = body.user;
        const response = await Note.find({ userID: id });

        if(!response){
            throw new Error('Ainda não há nenhuma nota cadastrada.');
        }
        
        return { notes: response };
    }
}