const express = require("express");
const { PostModel } = require("../model/post.model");


const postRouter = express.Router()



postRouter.post("/add",async(req,res)=>{
    try {
        const user = new PostModel(req.body)
        await user.save();
        res.status(200).json({"msg":"Post added"})
    } catch (error) {
        res.status(400).json({err : error.message})
    }
})


postRouter.get("/get",async(req,res)=>{
    const {title} = req.query
    
    try {
        console.log(title);
        if(title){
            const user = await PostModel.find({title})
            res.status(200).json(user)
        }else{
            const user = await PostModel.find()
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(400).json({err : error.message})
    }
})


postRouter.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    
    try {
        console.log(id);
        if(id){
          await  PostModel.findByIdAndDelete(id)
           res.status(200).json({"message":"post deleted"})
        }else{
            // const user = await PostModel.find()
            res.status(400).json({msg : "Post not exist"})
        }
    } catch (error) {
        res.status(400).json({err : error.message})
    }
})

postRouter.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
    const payload = req.body
    try {
        console.log(id);
        if(id){
          await  PostModel.findByIdAndUpdate({_id:id},payload)
           res.status(200).json({msg :"data updated"})
        }else{
            // const user = await PostModel.find()
            res.status(400).json({msg : "Post not exist"})
        }
    } catch (error) {
        res.status(400).json({err : error.message})
    }
})


module.exports = postRouter;
