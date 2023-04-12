const router = require("express").Router();
const contactController = require("../controllers/contact_controller");

router.post("/createContact", contactController.createContact);
router.post("/getContact", contactController.getUserData);
router.post("/deleteContact", contactController.deleteContact);

module.exports = router;