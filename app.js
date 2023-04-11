const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user_router");
const app = express();

app.use(bodyParser.json());

app.use("/", userRouter);

module.exports = app;