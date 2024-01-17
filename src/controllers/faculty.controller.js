const { facultyService } = require("../services");

const createFaculty = async (req, res) => {
    try {
        const reqBody = req.body;

        const facultyExists = await facultyService.getFacultyByEmail(reqBody.email);
        if (facultyExists) {
          throw new Error("User already craeted by this email!");
        }

        const faculty = await facultyService.createFaculty(reqBody);

        res.status(200).json({
            success: true,
            message: "Faculty create successfully!",
            data: { faculty }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

const getListFaculty = async (req, res) => {
    try {
        const getList = await facultyService.getFacultyList();

        res.status(200).json({
            success: true,
            message: "Get Faculty list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

const updateDetails = async (req, res) => {
    try {
        const facultyId = req.params.facultyId;

        const facultyExists = await facultyService.getFacultyById(facultyId);
        if (!facultyExists) {
            throw new Error("faculty not found!")
        }

        await facultyService.updateDetails(facultyId, req.body);

        res.status(200).json({
            success: true,
            message: "faculty details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};


const deleteDetails = async (req, res) => {
    try {
        const facultyId = req.params.facultyId;

        const facultyExists = await facultyService.getFacultyById(facultyId);
        if (!facultyExists) {
            throw new Error("faculty not found!")
        }

        await facultyService.deleteFaculty(facultyId);

        res.status(200).json({
            success: true,
            message: "faculty delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createFaculty,
    getListFaculty,
    updateDetails,
    deleteDetails
};