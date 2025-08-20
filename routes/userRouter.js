const express=require ('express');
const { getuserController, updateuserController, resetpasswordController, deleteUserController } = require('../controllers/userController');
const authmiddleware = require('../middlewares/authmiddleware');
const router=express();
//get USer
router.get("/getuser",authmiddleware, getuserController )
// update user
router.put("/updateUser",authmiddleware,updateuserController)
//reset password
router.post("/resetpassword",authmiddleware,resetpasswordController)
//delete user
router.delete("/deleteUser/:id",authmiddleware,deleteUserController)
module.exports=router;