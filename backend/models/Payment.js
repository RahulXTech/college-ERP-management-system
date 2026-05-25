const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    totalFees : Number,

    paidAmount : {
        type : Number,
        default : 0
    },

    pendingAmount : Number,

    paymentStatus : {
        type : String,
        enum : ["paid", "partial", "pending"],
        default : "pending"
    }

}, { timestamps : true });

module.exports = mongoose.model("Payment", paymentSchema);


