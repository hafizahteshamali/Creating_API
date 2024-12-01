import express from "express";
import { UserData } from "./UsersData.js";

export const UserRoutes = express.Router();

UserRoutes.get('/users', (req, res)=>{
    res.status(200).send({status: 200, Message: "Successfully Getting Data", data: UserData})
})