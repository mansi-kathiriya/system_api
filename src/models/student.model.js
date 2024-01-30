const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        phone_no: {
            type: Number
        },
        faculty: {
            type: mongoose.Types.ObjectId,
            ref: "faculty"
        },
        admin: {
            type: mongoose.Types.ObjectId,
            ref: "admin"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Student = mongoose.model("student", studentSchema);

module.exports = Student;