const User=require("../models/UserModel")

//Create a new User
exports.NewUser=(req,res)=>{
    User.create(req.body)
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
};

//Return All Users from data Base
exports.getUsers=(req,res)=>{
    User.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
}

//Edit a user by Id
exports.EditUser=(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body ,{new:true})
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
}

//Delete User by Id
exports.DeletUser=(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((data)=>res.json(data))
    .catch((err)=>res.status(500).json(err))
}