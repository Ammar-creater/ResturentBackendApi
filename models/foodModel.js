const mongoose =require ("mongoose");

const foodSchema=mongoose.Schema({
  
  title:{
    type:String,
    required:[true,"food title is required"]
  },
  discription:{
     type:String,
     required:[true,"food title is required"]
  },
  price:{
    type:Number,
    required:[true,"Price is Required"]
  },
  imageUrl:{
    type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPlNXBp05F4Asp2BThgjxjONPyLxUgk9EIQ&s"

  },
  foodTags:{
       type:String
  },
  category:{
    type:String
  },
  code:{
    type:String
  },
  isAvaible:{
    type:Boolean,
    default:true
  },
  resturent:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'resturent'
  },
  rating:{
    type:Number,
    default:5,
    min:1,
    max:5

  }
},
{timestamps:true})
module.exports=mongoose.model("food",foodSchema,); 