const categoryModel = require("../models/categoryModel")

const createCategoryController=async function(req,res){
    try {
        const{title,imageUrl}=req.body
        //validation
        if(!title)
        {
            res.status(404).send({
                success:false,
                message:"Please provide title and image"
            })
        }
        const newCategory= new categoryModel({
            title,
            imageUrl
        })
      await   newCategory.save();
      res.status(201).send({

        success:true,
        message:"category created",
        newCategory
      })
        //
    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in create catagory Api"
        })
    }
}
// get all categories
const getAllCategory=async function(req,res){
    try {
        const category=await categoryModel.find({})
        if(!category){
          return res.status(404).send({
            success:false,
            message:"No Category found"
          })
        }
        res.status(200).send({
            success:true,
            Totalcategory:category.length,
            category
        })
        
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in get All Category Api",error
        })
    }
}
const updateUserController= async function(req,res){
    try {
        const {id}=req.params
      const { title, imageUrl } = req.body || {};
        const UpdatedCategory=await categoryModel.findByIdAndUpdate(id,{title,imageUrl},{new:true})
        if(!UpdatedCategory){
          return  res.status(500).send({
                success:false,
                message:"Category Not Found"
            })
        }
        res.status(200).send({
            success:true,
            message:"user Successfully updated"
        })

    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in Update category Api"
        })
    }

}
//delete Catergory by id
const deleteCategoryController=async function(req,res){
    try {
        const {id}=req.params
        if(!id){
            return res.status(404).send({
                success:false,
                message:"please provide Category id"
            })

        }
        const category= await categoryModel.findById(id)
        if(!category){
            return res.status(400).send({
                success:false,
                message:"No Category found by this Id"
            })
        }
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category successfully deleted"
        })
    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in delete category Api"
        })
    }
}
module.exports={createCategoryController,getAllCategory,updateUserController,deleteCategoryController}