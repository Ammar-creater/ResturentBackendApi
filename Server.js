const express = require('express');
const cors=require("cors");
const morgan=require("morgan");
const dotenv =require("dotenv");
const connectDB = require('./config/db');


dotenv.config();
connectDB();

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
//routes

app.use("/api/v1/auth",require("./routes/authRouter"));
app.use("/api/v1/user",require("./routes/userRouter"));
app.use("/api/v1/resturent",require("./routes/resturentRouter"));
app.use("/api/v1/category",require("./routes/categoryRouter"));
app.use("/api/v1/food",require("./routes/foodRouter"));
app.get("/",function(req,res){
    res.status(200).send("<h1>HELLO MY FRIEND</h1>")
})
const PORT=process.env.PORT ;
app.listen(PORT,function(){
   
})