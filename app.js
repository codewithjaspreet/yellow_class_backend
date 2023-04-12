const express = require("express");
const bodyParser = require("body-parser");

const ContactModel = require("./models/contact_model");
const userRouter = require("./routes/user_router");
const contactRouter = require("./routes/contact_route");
const app = express();

app.use(bodyParser.json());

app.use("/", userRouter);
app.use("/", contactRouter);

module.exports = app;
