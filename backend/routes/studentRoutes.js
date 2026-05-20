const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createStudent,
    getStudents,
    pendingPayments
} = require("../controllers/studentController");


router.post(
    "/create",
    authMiddleware,
    createStudent
);

router.get(
    "/all",
    authMiddleware,
    getStudents
);

router.get(
    "/pending",
    authMiddleware,
    pendingPayments
);

module.exports = router;