import express from "express";
import dotenv from "dotenv";
import { PostRoutes } from "./Routes/Posts/PostRoutes.js";
import { CommentsRoutes } from "./Routes/Comments/CommentsRoutes.js";
import { AlbumsRoutes } from "./Routes/Albums/Albums.js";
import { PhotosRoutes } from "./Routes/Photos/PhotosRoutes.js";
import { TodosRoutes } from "./Routes/Todos/TodosRoutes.js";
import { UserRoutes } from "./Routes/Users/UserRoutes.js";
import cors from "cors";

const app  = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    res.status(200).send(`server start`)
})

app.use('/posting', PostRoutes)
app.use('/comments', CommentsRoutes);
app.use('/albums', AlbumsRoutes);
app.use('/photos', PhotosRoutes);
app.use('/todos', TodosRoutes);
app.use('/users', UserRoutes);

app.listen(PORT, ()=>{
    console.log(`Server Start ${PORT}`);
})