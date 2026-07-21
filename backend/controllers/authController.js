exports.signup=async(req,res)=>{
    try{
        const{name,email,password} =req.body;
        res.status(201).json({
            message:"user registered successfully",
            user:{
                name,
                email
            }
        });
    }
    catch(error){
        res.status(500).json({
            message:"signup failed"
        });
    }
};
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        res.status(200).json({
            message:"login successful",
            email
        });
    }
catch(error){
    res.status(500).json({
        message:"Login Failed"
    });
}
};