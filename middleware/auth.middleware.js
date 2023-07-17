const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1];
    if(token){
        next()
    }else{
        res.send({msg :"Login First"})
    }
}

module.exports = auth;