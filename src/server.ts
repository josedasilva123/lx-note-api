import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

import userRoutes from "./routes/userRoutes/user.routes";
import noteRoutes from "./routes/noteRoutes/note.routes";

const app = express();

app.use(cors());    

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

app.use('/user', userRoutes);
app.use('/notes', noteRoutes);

export default app;