const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://ankitsingh:singhankit@cluster0.ejpm97q.mongodb.net/post_management?retryWrites=true&w=majority");

module.exports={
    connection
}