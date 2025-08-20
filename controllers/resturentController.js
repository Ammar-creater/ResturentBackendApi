const resturentModel = require("../models/resturentModel");

const createResturentController=async function(req,res){
 try {
    const{title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingcount,code,coords}=req.body;
    //validation
    if(!title || !coords){
        return res.status(500).send({
            success:false,
            message:"Please Provide Title and Address"
        })
    }
    const newResturent= new resturentModel({title,imageUrl,foods,time,pickup,delivery,isOpen,logoUrl,rating,ratingcount,code,coords})
    await newResturent.save();
    res.status(201).send({
        success:true,
        message:"New Resturent is Created Successfully"
    })
 } catch (error) {
   
    res.status(500).send({
        success:false,
        message:"Error in resturent Api",error
    })
 }
}
//get all resturents
const getResturentController =async function(req,res){
try {

    const Resturents=await resturentModel.find({})
    if(!Resturents){
      return  res.status(404).send({
            success:false,
            message:"No Resurent found"
        })
    }
    res.status(200).send({
        success:true,
        TotalCount:Resturents.length,
        Resturents
    })
} catch (error) {
    
    res.status(500).send({
        success:false,
        message:"Error in Get All Resturent APi",error
    })
}
}
// get resturent by id
const getResturentbyidController= async function(req,res){
try {
    const Resturentid = req.params.id
    //validation
    if(!Resturentid){
       return res.status(404).send({
            success:false,
            message:"ID in incorrect there is no resturent on that id"
        })
    }
    //find Resturent 
    const Resturent =await resturentModel.findById(Resturentid)
    if(!Resturent){
        return res.status(404).send({
            success:false,
            message:"Resturent is not found "
        })
    }
    res.status(200).send({
        success:true,
        message:"Resturent successfully founded",Resturent
    })
    
} catch (error) {
   
    res.status(500).send({
        success:false,
        message:"Error in find Resturent by ID Api",error
    })
    
}
}
//delete REsturent by id
const deleteResturentController=async function(req,res){
    try {
        const Resturentid=req.params.id
        //validation
        if(!Resturentid){
           return res.status(404).send({
                success:false,
                message:"There is no Resturent on this ID"
            })
        }
        // find and delete Resturent 
         await resturentModel.findByIdAndDelete(Resturentid)
        res.status(200).send({
            success:true,
            message:"Resturent is successfully deleted"
        })
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in Delete Resturent api",error
        })
    }
}
module.exports={createResturentController,getResturentController,getResturentbyidController,deleteResturentController}