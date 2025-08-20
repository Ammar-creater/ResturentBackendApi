const userModel = require("../models/userModel");
const bcrypt=require("bcrypt");

const getuserController= async function(req,res){
   try {
    //find user
    const user=  await userModel.findById({_id:req.userId})
    //validation
    if(!user){
        return res.status(404).send({
            success:false,
            message:"User Not Found"
        })
    }
    //hide password
    user.password=undefined
    //reponse
    res.status(200).send({
        success:true,
        message:"User Get Successfully",user
    })
    
   } catch (error) {
      res.status(500).send({
        success:false,
        Message:"ERror is user Api",error
      })
   }
};
//update User
const updateuserController=async function(req,res){

    try {
        //find user
        const user=await userModel.findById({_id:req.userId})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User not found",
            })
        }
        //updateuser 
        const{username,address,phone,answer}=req.body;
        if(username) user.username=username
        if(address) user.address=address
        if(phone) user.phone=phone
        if(answer) user.answer=answer
       await  user.save();
       res.status(200).send({
        success:true,
        message:"User Successfully updated"
       })


    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in Update user Api",error
        })
    }
}
const resetpasswordController= async function(req,res){
    try {
        
        const{email,newPassword,answer}=req.body
        if(!email || !newPassword || !answer){
           return res.status(400).send({
                success:false,
                message:"Please provide  All Feilds"
            })
        }
        const user=await userModel.findOne({email,answer})
        if(!user){
           return  res.status(404).send({
                success:false,
                message:"User Not Found or invalid password"
            })
        }
        //hashing password
         const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            user.password=hashedPassword
        await user.save();
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in Password Reset Api",
            error:error.stack
        })
    }

}
// delete profile account
const deleteUserController=async function(req,res){
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success:true,
            message:"Account is successfully deleted"
        })
        
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in delete Profile Api",
            error
        })
    }

}
module.exports= {getuserController,updateuserController,resetpasswordController,deleteUserController};