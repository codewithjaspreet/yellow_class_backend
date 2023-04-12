const router = require("express").Router();
const contactController = require("../controllers/contact_controller");

router.post("/createContact", contactController.createContact);


module.exports = router;