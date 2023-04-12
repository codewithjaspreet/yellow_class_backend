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

  static async getContactList({ userId }) {
    const userData = ContactModel.find({ userId: userId });

    return userData;
  }

  static async deleteCurrentContact(id) {
    const deleted = await ContactModel.findByIdAndDelete({ _id: id });
    return deleted;
  }

  static async editContact({
    id,
    firstName,
    lastName,
    designation,
    phoneNumber,
  }) {
    const updatedContact = await ContactModel.findByIdAndUpdate(
      id,
      {
        firstName ,
        lastName,
        designation,
        phoneNumber,
      },
      { new: true }
    );

    return updatedContact;
  }
}


module.exports = ContactService;