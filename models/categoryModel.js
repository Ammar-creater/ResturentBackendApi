const mongoose =require ("mongoose");

const categorySchema=mongoose.Schema({
  title:{
    type:String,
    required:[true,"category title is must required"]
  },
  imageUrl:{
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s"
  },
  
},
{timestamps:true})
module.exports=mongoose.model("category",categorySchema,); 