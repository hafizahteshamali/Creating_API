import express from 'express';
import { postData } from './Posts.js';

export const PostRoutes = express.Router();

PostRoutes.get('/posts', (req, res)=>{
    res.status(200).send({status: "success", message: "Data get Successfully", postData})
})