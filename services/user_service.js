const UserModel = require("../models/user_model");
const jwt = require("jsonwebtoken");
class UserService {
  static async registerUser(name, email, password) {
    try {
      const createUser = new UserModel({ name, email, password });

      return await createUser.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async checkIfUserExist(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }


  static async generateToken(tokenData , secretKey , expiresIn){

    return  jwt.sign(tokenData , secretKey , {expiresIn:expiresIn});

  }
}

module.exports = UserService;
