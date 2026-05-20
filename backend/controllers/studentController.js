const User = require("../models/User");
const Payment = require("../models/Payment");
const bcrypt = require("bcryptjs");


// CREATE STUDENT
exports.createStudent = async(req, res) => {

    try{

        if(req.user.role !== "admin"){
            return res.status(403).json({
                message : "Access Denied"
            });
        }

        const {
            name,
            fatherName,
            enrollment,
            password,
            course,
            branch,
            semester,
            batch,
            scholarNumber,
            totalFees
        } = req.body;

        const studentExist = await User.findOne({ enrollment });

        if(studentExist){
            return res.status(400).json({
                message : "Student Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = await User.create({
            name,
            fatherName,
            enrollment,
            password : hashedPassword,
            course,
            branch,
            semester,
            batch,
            scholarNumber,
            role : "student"
        });

        await Payment.create({
            studentId : student._id,
            totalFees,
            pendingAmount : totalFees
        });

        res.status(201).json({
            message : "Student Created Successfully",
            student
        });

    }
    catch(err){

        res.status(500).json({
            message : err.message
        });

    }

};


// GET ALL STUDENTS
exports.getStudents = async(req, res) => {

    try{

        const students = await User.find({
            role : "student"
        });

        res.status(200).json(students);

    }
    catch(err){

        res.status(500).json({
            message : err.message
        });

    }

};


// GET PENDING PAYMENTS
exports.pendingPayments = async(req, res) => {

    try{

        const pending = await Payment.find({
            pendingAmount : { $gt : 0 }
        }).populate("studentId");

        res.status(200).json(pending);

    }
    catch(err){

        res.status(500).json({
            message : err.message
        });

    }

};
