const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    createStudent,
    getStudents,
    pendingPayments,
    getSingleStudent
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

router.get(
    "/:id",
    authMiddleware,
    getSingleStudent
);

module.exports = router;