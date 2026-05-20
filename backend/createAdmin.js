const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async() => {

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
        name : "Admin",
        email : "admin@gmail.com",
        password : hashedPassword,
        role : "admin"
    });

    console.log("Admin Created");

    process.exit();
};

createAdmin();