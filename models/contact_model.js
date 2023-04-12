const mongoose = require("mongoose");
const db = require("../config/db");
const UserModel = require("./user_model");

const { Schema } = mongoose;

const contactSchema = new Schema({

  userId: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
    lowercase: true,
  },

  designation: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },
});

const ContactModel = db.model("contacts", contactSchema);

module.exports = ContactModel;
