const userModel=require("../models/userModel")
module.exports=async function (req,res,next) {
    try {
       const user=await userModel.findById(req.userId)
       if(user.usertype !=="admin"){
        res.status(401).send({
            success:false,
            message:"Only admin Access"
        })
        
       }
       else{
            next();
        }
        
    } catch (error) {
        res.status(500).send({
            success:false,
            Message:"UnAuthorized Access",error
        })
    }
    
}