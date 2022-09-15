import { Schema, model, ObjectId } from "mongoose";

interface iUser{
    _id?: ObjectId;
    name: string;
    password: string;
    email: string;
    createAt: string;
    updatedAt: string;
}

const userSchema = new Schema<iUser>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
}, {
    timestamps: true,
})

const User = model<iUser>("User", userSchema, "users");

export default User;