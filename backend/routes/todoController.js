const express=require("express");
const router=express.Router();
const{
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    shareTodoList,
} =require("../controllers/todoController");
router.get("/",getTodos);
router.post("/",creteTodo);
router.put("/:id",updateTodo);
router.delete("/:id",deletetodo);
router.get("/share/:id",shareTodoList);
module.exports=router;