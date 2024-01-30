const { Student } = require("../models");

const createStudent = async (reqBody) => {
    return Student.create(reqBody);
};

const getStudentList = async (filter, options) => {
    return Student.find()
        .populate("faculty")
        .populate("admin")
};

const getStudentByEmail = async (email) => {
    return Student.findOne({ email });
};

const getStudentById = async (studentId) => {
    return Student.findById(studentId);
}

const updateDetails = async (studentId, updateBody) => {
    return Student.findByIdAndUpdate(studentId, { $set: updateBody });
}

const deleteStudent = async (studentId) => {
    return Student.findByIdAndDelete(studentId);
}

module.exports = {
    createStudent,
    getStudentList,
    getStudentByEmail,
    getStudentById,
    updateDetails,
    deleteStudent,
};