const { Admin } = require("../models");

const createAdmin = async (reqBody) => {
    return Admin.create(reqBody);
};

const getAdminList = async (filter, options) => {
    return Admin.find()
        .populate("faculty")
        .populate("student")
};

const getAdminByEmail = async (email) => {
    return Admin.findOne({ email });
};

const getAdminById = async (adminId) => {
    return Admin.findById(adminId);
}

const updateDetails = async (adminId, updateBody) => {
    return Admin.findByIdAndUpdate(adminId, { $set: updateBody });
}

const deleteAdmin = async (adminId) => {
    return Admin.findByIdAndDelete(adminId);
}

module.exports = {
    createAdmin,
    getAdminList,
    getAdminByEmail,
    getAdminById,
    updateDetails,
    deleteAdmin,
};