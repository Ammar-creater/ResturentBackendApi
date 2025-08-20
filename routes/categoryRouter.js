const express=require ('express');

const authmiddleware = require('../middlewares/authmiddleware');
const { createCategoryController, getAllCategory, updateUserController, deleteCategoryController } = require('../controllers/categoryController');

const router=express();
 //routes
//Create categoery
router.post("/create",authmiddleware,createCategoryController)
//get all cetagory
router.get("/getall",authmiddleware,getAllCategory)
//Update Category Router
router.put("/update/:id",authmiddleware,updateUserController)
//delete category 
router.delete("/delete/:id",authmiddleware,deleteCategoryController)
module.exports=router;