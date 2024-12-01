import express from "express";
import { PhotosData } from "./PhotosData.js";

export const PhotosRoutes = express.Router();

PhotosRoutes.get('/photos', (req, res)=>{
    res.status(200).send({status: "200", Message: "Successfully Getting Data", data: PhotosData})
})