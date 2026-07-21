exports.getLists=async(req,resp)=>{
    try{
        res.status(200).json({
            message:"All todolists",
            data=[]
        });
    }
    catch(error){
        res.status(500).json({
            message:"error fetching lists"
        });
    }
};
exports.createList=async(req,res)=>{
    try{
        const {name}=req.body;
        res.status(201).json({
            message:"todo list created",
            list:{
                name
            }
        });
    }
 catch(error){
    res.status(500).json({
        message:"error creating list"
    });
 }   
};
exports.renameList=async (req,res)=>{
    try{
        const{id}=req.params;
        const{name}=req.body;
        res.status(200).json({
            message:"todo list renamesd",
            id,name
        });
    }
    catch(error){
        res.status(500).json({
            message:"error in renaming the list"
        });
    }
}
exports.deleteList=async(req,res)=>{
    try{
        const{id}=req.params;
        res.status(200).json({
            message:"todo list deleted",
            id
        });
    }
    catch(error){
        res.status(500).json({
            message:"Delete failed"
        });
    }
};