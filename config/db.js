const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://jaspreetsodhi02:root@cluster0.2nkhc6f.mongodb.net/test"
  )
  // .createConnection("mongodb://127.0.0.1:27017/contact")
  .on("open", () => {
    console.log("Connected to MongoDb");
  })
  .on("error", (error) => {
    console.log("Error in connection", error);
  });


  module.exports = connection;