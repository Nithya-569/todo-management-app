const TodoList=require("../models/TodoList");
exports.getLists=async(req,res)=>{
    try{
        const lists=await ToolList.find();
        res.status(200).json(lists);
        
    }catch(error){
        res.status(500).json({
        message:"error in fetching "
        });
    }
}
exports.createList=async(req,res)=>{
    try{
        const {name}=req.body;
        const newList=new TodoList({
            name,
        });
    }
    catch(error){
        res.status(500).json({
            message:"error in creating the todoList"
        });
    }
}