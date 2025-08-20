const express=require ('express');

const authmiddleware = require('../middlewares/authmiddleware');
const { createFoodController, getAllFoodController, getfoodbyresturent, getfoodbyidController, updateFoodController, deleteFoodController, OrderController, orderStatusController } = require('../controllers/foodController');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router=express();
 //routes
 // create food
 router.post("/create",authmiddleware,createFoodController)
 //get all food
 router.get("/getall",authmiddleware,getAllFoodController)
 //get single food
 router.get("/getfood/:id",authmiddleware,getfoodbyidController)
 //get food by resturent id
 router.get("/getfoodbyresturent/:id",authmiddleware,getfoodbyresturent)
 //Update Food
 router.put("/update/:id",authmiddleware,updateFoodController)
 //delete food
 router.delete("/delete/:id",authmiddleware,deleteFoodController)
 //Order Place
 router.post("/placeorder",authmiddleware,OrderController)
 //Order status
 router.post("/orderstatus/:id",authmiddleware,adminMiddleware,orderStatusController)

module.exports=router;