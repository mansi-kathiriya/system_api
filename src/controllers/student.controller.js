const { studentService } = require("../services");

const createStudent = async (req, res) => {
    try {
        const reqBody = req.body;

        const studentExists = await studentService.getStudentByEmail(reqBody.email);
        if (studentExists) {
          throw new Error("User already craeted by this email!");
        }

        const student = await studentService.createStudent(reqBody);

        res.status(200).json({
            success: true,
            message: "Student create successfully!",
            data: { student }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

const getListStudent = async (req, res) => {
    try {
        const getList = await studentService.getStudentList();

        res.status(200).json({
            success: true,
            message: "Get Student list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

const updateDetails = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentExists = await studentService.getstudentById(studentId);
        if (!studentExists) {
            throw new Error("student not found!")
        }

        await studentService.updateDetails(studentId, req.body);

        res.status(200).json({
            success: true,
            message: "student details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};


const deleteDetails = async (req, res) => {
    try {
        const studentId = req.params.studentId;

        const studentExists = await studentService.getStudentById(studentId);
        if (!studentExists) {
            throw new Error("student not found!")
        }

        await studentService.deleteStudent(studentId);

        res.status(200).json({
            success: true,
            message: "student delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createStudent,
    getListStudent,
    updateDetails,
    deleteDetails
};