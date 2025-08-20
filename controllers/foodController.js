const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderModel");

const createFoodController=async function (req,res) {
    try {
        const{title,discription,price,imageUrl,foodTags,category,code,isAvaible,resturent,rating}=req.body;
        //validaiton
        if(!title || !discription || !price ||!resturent){
            res.status(404).send({
                success:false,
                message:"plaese provide all feilds "
            })
        }
        const newFood=new foodModel({title,discription,price,imageUrl,foodTags,category,code,isAvaible,resturent,rating})
        await newFood.save();
        res.status(201).send({
            success:true,
            message:"Food is successfully Created",newFood
        })
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in Create food Api"
        })
    }

    
}
//get all food
const getAllFoodController=async function (req,res){
    try {
        const food=await foodModel.find({})
        if(!food){
            return res.status(404).send({
                success:false,
                message:"There is no food"
            })
        }
        res.status(200).send({
            success:true,
            Totel:food.length,
            food
        })
    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in get all food Api"
        })
    }
}
const getfoodbyidController=async function(req,res){
    try {
        const foodid=req.params.id
        if(!foodid){
            return res.status(404).send({
                success:false,
                message:"Food is not found"
            })
        }
        const food=await foodModel.findById(foodid)
        if(!food){
            return res.status(404).send({
                success:false,
                message:"Please provide id for search"
            })
        }
       res.status(200).send({
        success:true,
        food
        
       })
        
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in get good by id Api"
        })
        
    }
}
//get food by resturent 
const getfoodbyresturent=async function(req,res){
    try {
        const resturentid=req.params.id
        if(!resturentid){
            return res.status(404).send({
                success:false,
                message:"Food id is not found"
            })
        }
        const food=await foodModel.find({resturent:resturentid})
        if(!food){
            return res.status(404).send({
                success:false,
                message:"Please provide id for search"
            })
        }
       res.status(200).send({
        success:true,
        message:"food base on Resturent",
        food
        
       })
        
    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:"Error in get good by id Api",error
        })
        
    }
}
const updateFoodController=async function(req,res){
    try {
        console.log("REQ BODY:", req.body); 
        const Foodid=req.params.id
        if(!Foodid){
           return res.status(404).send({
            success:false,
            message:"ID not Found "
           })
        }
        const food=await foodModel.findById(Foodid)
        if(!food){
            return res.status(404).send({
                success:false,
                message:"Food Not Found"
            })
        }
        const{title,discription,price,imageUrl,foodTags,category,code,isAvaible,resturent,rating}=req.body
        const UpdateFood=await foodModel.findByIdAndUpdate(Foodid,{title,discription,price,imageUrl,foodTags,category,code,isAvaible,resturent,rating},{new:true})
        res.status(200).send({
            success:true,
            message:"Food Successfully updated"
        })
    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in Update food api",error
        })
    }
}
const deleteFoodController=async function(req,res){
    try {
        const Foodid=req.params.id
        if(!Foodid){
            return res.status(404).send({
                success:false,
                messsage:"Food id not found"
            })
        }
        const Food=await foodModel.findById(Foodid)
        if(!Food){
        res.status(404).send({
            success:false,
            message:"food is not found"
        })
    }
      await foodModel.findByIdAndDelete(Foodid)
      res.status(200).send({
        success:true,
        message:"Food Successfully Deleted"
      })
    } catch (error) {
       
        res.status(500).send({
            success:false,
            message:"Error in Update Api"
        })
    }
}
const OrderController = async function(req, res) {
  try {
    const { cart } = req.body;
    if (!cart || cart.length === 0) {
      return res.status(400).send({
        success: false,
        message: "Please provide a food cart"
      });
    }


    let total = 0;
    cart.forEach((i) => {
      total += i.price;
    });

  
    const foodIds = cart.map(i => i.id);

    const newOrder = new orderModel({
      foods: foodIds,         
      payment: total,
      buyer: req.userId
    });

    await newOrder.save();

    res.status(201).send({
      success: true,
      message: "Order successfully placed",
      newOrder
    });
  } catch (error) {
    console.log("Order error:", error);
    res.status(500).send({
      success: false,
      message: "Error in Order Api",
      error
    });
  }
};
//change order status
const orderStatusController=async function (req,res){
    try {
        const orderId=req.params.id
        if(!orderId){
            return res.status(404).send({
                success:false,
                message:"please provide valid order id"
            })
        }
        const {status}=req.body
        const order =await orderModel.findByIdAndUpdate(orderId,{status},{new:true})
        res.status(200).send({
            success:true,
            message:"Order Status Updated"
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in order status Api"
        })
    }
}

module.exports={createFoodController,getAllFoodController,getfoodbyidController,getfoodbyresturent,updateFoodController,deleteFoodController,OrderController,orderStatusController}