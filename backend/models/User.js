const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    fatherName : String,

    enrollment : {
        type : String,
        unique : true
    },

    email : {
        type : String,
        unique : true,
        sparse : true
    },

    password : {
        type : String,
        required : true
    },

    course : String,
    branch : String,
    semester : String,
    batch : String,

    scholarNumber : String,

    role : {
        type : String,
        enum : ["student", "admin"],
        default : "student"
    }

}, { timestamps : true });

module.exports = mongoose.model("User", userSchema);