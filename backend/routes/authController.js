const express=require("express");
const router=express.Router();
const{
    getLists,
    createList,
    renameList,
    deleteList,
}=require("../controllers/todoListController");
router.get("/",getLists);
router.poxg("/",createList);
router.put("/:id",renameList);
router.delete("/:id",deleteList);
module.exports=router;