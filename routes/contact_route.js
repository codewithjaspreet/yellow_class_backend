const router = require("express").Router();
const contactController = require("../controllers/contact_controller");

router.post("/createContact", contactController.createContact);
router.get("/getContact", contactController.getUserData);

module.exports = router;