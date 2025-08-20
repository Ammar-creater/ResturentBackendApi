const jwt=require("jsonwebtoken");
module.exports=async function (req,res,next) {
    try {
        //get token  
        const token=req.headers["authorization"].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET, function(err,decode){
            if(err){
                res.status(401).send({
                    success:false,
                    Message:"Unauthorize user"
                })
            }
            else{
               req.userId = decode.id; 

                next()
            }
        })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            Message:"Error in Auth Api",error
        })
    }
    
}