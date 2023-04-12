const ContactModel = require("../models/contact_model");


class ContactService {
  static async createContact({
    userId,
    firstName,
    lastName,
    designation,
    phoneNumber,
  }) {
    const createContact = new ContactModel({
      userId,
      firstName,
      lastName,
      designation,
      phoneNumber,
    });

    return await createContact.save();
  }

  static async getContactList({
    userId,
    
  }) {

    const userData = ContactModel.find({ userId: userId });

    return userData;
    
    
  }
}


module.exports = ContactService;