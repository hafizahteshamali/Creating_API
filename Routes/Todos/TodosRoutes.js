import exprss from "express";
import { TodosData } from "./TodosData.js";

export const TodosRoutes = exprss.Router();

TodosRoutes.get('/todos', (req, res)=>{
    res.status(200).send({status: "success", Message: "Getting Data successfully", data: TodosData})
})