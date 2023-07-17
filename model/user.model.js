const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    city:String,
    age:Number
},{
    versionKey:false
})

const UserModel = mongoose.model("users",UserSchema);

module.exports={
    UserModel
}