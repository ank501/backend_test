const { default: mongoose } = require("mongoose");

const PostSchema = mongoose.Schema({
    title : String,
    content : String
},{
    versionKey:false
})

const PostModel =  mongoose.model("posts",PostSchema)

module.exports={
    PostModel
}