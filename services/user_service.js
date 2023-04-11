const UserModel = require('../models/user_model');


class UserService {
  static async registerUser(name, email, designation) {
    try {
      const createUser = new UserModel({name,  email, designation });

      return await createUser.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;