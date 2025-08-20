const express=require ('express');

const authmiddleware = require('../middlewares/authmiddleware');
const { createResturentController, getResturentController, getResturentbyidController, deleteResturentController } = require('../controllers/resturentController');
const router=express();
 //routes
 //create resturent method post
 router.post("/create",authmiddleware,createResturentController)
 // get all resturents get method
 router.get("/getAll",getResturentController)
 //get Resturent by id get method
 router.get("/get/:id",getResturentbyidController)
 //delete Resturent by id
 router.delete("/delete/:id",authmiddleware,deleteResturentController)
module.exports=router;