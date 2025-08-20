const userModel = require("../models/userModel");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");

const registerUser= async function(req,res){
   try {
    const{username,password,email,phone,address,answer}=req.body;
    //validation
     if(!username || !password ||!email ||!phone ||!address || !answer){
        return res.status(500).send({
            success:false,
            message:"please provide all feilds"
        })
     }
  //check user
 const existinguser= await userModel.findOne({email})
 if(existinguser){
   return res.status(500).send({
        success:false,
        message:"User Already Register please login"
    })

 }
 const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
 //create user 
 const user= await userModel.create({
    username,
    email,
    password: hashedPassword,
    address,
    phone,
    answer
 })
 res.status(201).send({
    success:true,
    message:"User Successfully Created"
 })
    
   } catch (error) {
   
    res.status(500).send({
        success:false,
        message:"Error in Register Api,",error
    })
    
   }
}
//login user

    const loginUser = async function(req,res){
        try{
        const{email,password}=req.body;
        // validiation
        if(!email || !password){
            return res.status(500).send({
                success:false,
                message:"Please provide EMAIL OR PASSWORD"
            })
        }
       //chekc user
       const user = await userModel.findOne({email})
       if(!user){
       return res.status(404).send({
            success:false,
            message:"User not Found"
        })
       }
       //check or compare user
       const isMatch= await bcrypt.compare(password,user.password)
       
        if(!isMatch){
          return  res.status(500).send({
                success:false,
                message:"password or Email is incorrect"
            })
        }
          
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.cookie("token",token)
        // user.password=undefined;
     
       
       res.status(200).send({
        success:true,
        message:"Successfully Login",user,token
       })

    }
  catch (error) {
  
    res.status(500).send({
        success:false,
        message:"ERROR in Login Api"
    })
  }
}
module.exports={registerUser,loginUser}