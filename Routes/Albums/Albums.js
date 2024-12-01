import express from "express";
import { AlbumsData } from "./AlbumsData.js";

export const AlbumsRoutes = express();

AlbumsRoutes.get("/albums", (req, res)=>{
    res.status(200).send({status: "success", Message: "Getting Data Successfully", data: AlbumsData})
})