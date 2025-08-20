const mongoose=require('mongoose');
const connectDB= async function(res,req){
    try {
       await  mongoose.connect(process.env.MONGO_URL);
       console.log(`Data Base is Connected ${mongoose.connection.host} `)
        
    } catch (error) {
        console.log("database error",error)
        
    }
}
module.exports=connectDB;