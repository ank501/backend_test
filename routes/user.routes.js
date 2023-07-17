const express =require("express");
const bcrypt = require("bcrypt")
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
  const {name,email,pass,city,age} = req.body; 
try { 
  bcrypt.hash(pass,2,async(err, hash) =>{
    if(err){
     res.status(400).json({error  : err.message})
    }else{
     const user = new UserModel({name,email,pass:hash,age,city});
     await user.save();
     res.status(200).json(user)
    }
 });
} catch (error) {
    res.send(error)
}

})
userRouter.post("/login",async(req,res)=>{
 const {email,pass} = req.body;
try {
    const user = await UserModel.findOne({email})
    if(user){
        bcrypt.compare(pass, user.pass, (err, result)=> {
            if(result){
               var token = jwt.sign({user:"normal"}, "ankit",{expiresIn :420})
               res.status(200).json({"msg":"User login Succesfully","token":token})
            }else{
                res.status(400).json({error : "wrong credential"})
            }
        });
        // res.send(user)
    }else{
        res.status(400).json({msg:"user not found"})
    }
} catch (error) {
    res.status(400).json({err  : error.message})
}

})
userRouter.post("/logout",(req,res)=>{
    res.send("user logout")
})

module.exports= userRouter;