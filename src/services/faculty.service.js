const { Faculty } = require("../models");

const createFaculty = async (reqBody) => {
    return Faculty.create(reqBody);
};

const getFacultyList = async (filter, options) => {
    return Faculty.find().populate("admin")
};

const getFacultyByEmail = async (email) => {
    return Faculty.findOne({ email });
};

const getFacultyById = async (facultyId) => {
    return Faculty.findById(facultyId);
}

const updateDetails = async (facultyId, updateBody) => {
    return Faculty.findByIdAndUpdate(facultyId, { $set: updateBody });
}

const deleteFaculty = async (facultyId) => {
    return Faculty.findByIdAndDelete(facultyId);
}

module.exports = {
    createFaculty,
    getFacultyList,
    getFacultyByEmail,
    getFacultyById,
    updateDetails,
    deleteFaculty,
};