const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        faculty: {
            type: mongoose.Types.ObjectId,
            ref: "faculty"
        },
        student: {
            type: mongoose.Types.ObjectId,
            ref: "student"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;