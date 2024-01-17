const express = require("express");
const { facultyController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-faculty",
    facultyController.createFaculty
);

router.get(
    "/faculty-list",
    facultyController.getListFaculty
);

router.put(
    "/faculty-update",
    facultyController.updateDetails
);

router.delete(
    "/faculty-delete",
    facultyController.deleteDetails
);

module.exports = router;