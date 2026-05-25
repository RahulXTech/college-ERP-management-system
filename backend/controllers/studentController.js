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
        console.log(req.body);
        console.log(totalFees);
        await Payment.create({
            studentId: student._id,
            totalFees: Number(totalFees),
            pendingAmount: Number(totalFees)
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

// GET SINGLE STUDENT
exports.getSingleStudent = async (req, res) => {

    try {

        // FIND STUDENT
        const student = await User.findById(req.params.id);

        // CHECK STUDENT
        if (!student) {

            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            });

        }

        // ADMIN CAN ACCESS ANY STUDENT
        if (req.user.role === "admin") {

            return res.status(200).json({
                success: true,
                student
            });

        }

        // STUDENT CAN ACCESS ONLY OWN PROFILE
        if (
            req.user.role === "student" &&
            req.user.id.toString() === student._id.toString()
        ) {

            return res.status(200).json({
                success: true,
                student
            });

        }

        // ACCESS DENIED
        return res.status(403).json({
            success: false,
            message: "Access Denied"
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

// GET SINGLE STUDENT
// exports.getSingleStudent = async (req, res) => {

//     try {

//         const student = await User.findById(req.params.id);

//         if (!student) {

//             return res.status(404).json({
//                 success: false,
//                 message: "Student Not Found"
//             });

//         }

//         return res.status(200).json({
//             success: true,
//             student
//         });

//     } catch (err) {

//         return res.status(500).json({
//             success: false,
//             message: err.message
//         });

//     }

// };