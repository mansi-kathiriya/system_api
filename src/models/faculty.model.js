const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
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
        password: {
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
        student: {
            type: mongoose.Types.ObjectId,
            ref: "student"
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

const Faculty = mongoose.model("faculty", facultySchema);

module.exports = Faculty;