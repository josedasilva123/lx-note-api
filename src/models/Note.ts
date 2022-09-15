import { Schema, model, ObjectId } from "mongoose";

interface iNote{
    _id?: ObjectId;
    userID: string;
    title: string;
    text: string;
    createdAt: string;
    updatedAt: string;
}

const noteSchema = new Schema<iNote>({
    userID: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
}, {
    timestamps: true,
})

const Note = model<iNote>("Note", noteSchema, 'notes')

export default Note;