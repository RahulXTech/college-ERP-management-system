const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();


// DATABASE CONNECTION
connectDB();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);


// SERVER
app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});