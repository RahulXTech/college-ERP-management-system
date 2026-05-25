const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// LOGIN
exports.login = async(req, res) => {

    try{

        const { loginId, password } = req.body;

        const user = await User.findOne({
            $or : [
                { enrollment : loginId },
                { email : loginId }
            ]
        });

        if(!user){
            return res.status(404).json({
                message : "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                message : "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                id : user._id,
                role : user.role
            },
            process.env.JWT_SECRET,
            { expiresIn : "7d" }
        );
          // Save Token in Cookie
        res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: false, // true in production with HTTPS
                sameSite: "strict",
                expires: new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                )
            })
        res.status(200).json({
            message : "Login Successful",
            token,
            role : user.role,
            user
        });

    }
    catch(err){

        res.status(500).json({
            message : err.message
        });

    }

};