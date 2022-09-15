import { ObjectId } from "mongoose"

interface iUserBody{
    id: ObjectId;
    name: string;
    email: string;
}

export interface iAuthenticateBody{
    user: iUserBody;
}