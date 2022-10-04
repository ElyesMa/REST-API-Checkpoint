const express=require("express")
const router=express.Router()
const {NewUser,getUsers,EditUser,DeletUser}=require('../Controllers/userControllers')

//response to post request by Newuser function imported from userControllers
router.post("/",NewUser);

//response to get request by getUsers function imported from userControllers
router.get("/",getUsers)

//Edit a User by ID
router.put("/:id",EditUser)

//Delete a User By ID
router.delete("/:id",DeletUser)

module.exports=router