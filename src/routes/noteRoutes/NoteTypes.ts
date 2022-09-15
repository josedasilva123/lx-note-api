import { iAuthenticateBody } from "../../types/global";

export interface iCreateBody extends iAuthenticateBody{
    title: string;
    text: string;
}

export interface iDeleteParams{
    noteId: string;
}