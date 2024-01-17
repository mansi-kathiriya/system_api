const express = require("express");
const { adminController } = require("../../controllers");

const router = express.Router();

router.post(
    "/create-admin",
    adminController.createAdmin
);

router.get(
    "/admin-list",
    adminController.getListAdmin
);

router.put(
    "/admin-update",
    adminController.updateDetails
);

router.delete(
    "/admin-delete",
    adminController.deleteDetails
);

module.exports = router;