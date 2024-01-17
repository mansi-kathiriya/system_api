const express = require("express");
const { studentController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-student",
    studentController.createStudent
);

router.get(
    "/student-list",
    studentController.getListStudent
);

router.put(
    "/student-update",
    studentController.updateDetails
);

router.delete(
    "/student-delete",
    studentController.deleteDetails
);

module.exports = router;