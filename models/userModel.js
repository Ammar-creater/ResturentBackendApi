const mongoose =require ("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,'user name is required']
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        required:[true,"phone number is required"]
    },
    usertype:{
        type:String,
        required:[true,"user is required"],
        default:'client',
        enum:["client","admin","vender","driver"]
    },
    profile:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPlNXBp05F4Asp2BThgjxjONPyLxUgk9EIQ&s"
    },
    answer:{
        type:String,
        required:[true,"Answer is Required"]
    },
    // newPassword:{
    //     type:String,
    //     required:[true," New password is required"]
    // }
    

},
{timestamps:true})
module.exports=mongoose.model("User",userSchema); 