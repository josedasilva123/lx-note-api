import { Request, Response } from "express";
import { iAuthenticateBody } from "../../types/global";
import NotesServices from "./NoteServices";
import { iCreateBody, iDeleteParams } from "./NoteTypes";

export default class NoteControllers{
    static async Create(req: Request<{}, {}, iCreateBody, {}>, res: Response){
        const response = await NotesServices.Create(req.body);
        res.status(200).json(response);
    }

    static async Delete(req: Request<iDeleteParams, {}, iAuthenticateBody, {}>, res: Response){
        const response =  await NotesServices.Delete(req.body, req.params);
        res.status(200).json(response);
    }

    static async GetUserNotes(req: Request, res: Response){
        const response = await NotesServices.GetUserNotes(req.body); 
        res.status(200).json(response);
    }
}