const mongoose=require("mongoose");
const todoListSchema=new mongoose.Schema({
    name:String,
    password:String,
});
module.exports=mongoose.model("TodoList",TodoListSchema);