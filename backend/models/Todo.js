const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    text:String,
    Completed:Boolean,
    Tag:String,
    listId:String
});
module.exports=mongoose.model("TodoList",TodoSchema);