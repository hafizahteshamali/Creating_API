import express from "express";
import { CommentsData } from "./CommentsData.js";

export const CommentsRoutes = express.Router();

CommentsRoutes.get("/comments", (req, res)=>{
    res.status(200).send({status: 200, Message: "Getting Data Successfully", data: CommentsData})
})