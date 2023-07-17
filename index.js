const express =require("express");
const { connection } = require("./db");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const auth = require("./middleware/auth.middleware");

const app = express();
app.use(express.json());

app.use("/users",userRouter)
app.use(auth)
app.use("/posts",postRouter)

app.get("/",(req,res)=>{
    res.send("server is on")
})

app.listen(8080,async()=>{
  try {
    await   connection
    console.log("connected to database");
    console.log("server is running at 8080");
    
  } catch (error) {
    console.log({msg:error});
  }
 
})