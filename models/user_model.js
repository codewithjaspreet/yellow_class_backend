const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {

    type: String,
    required: true,

  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    },


});

userSchema.pre(
    'save',async function(){


        try{

            var user = this;

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(user.password , salt);

            user.password = hash;



        }

        catch(err){

            throw new Error(err.message);
        }


    }
)


userSchema.methods.comparePassword = async function(userPassword){

   try{

    const isMatching = await bcrypt.compare(userPassword , this.password);
   
     return isMatching;
}

   catch(err){

    throw err;
   }

   
}

const UserModel = db.model("user", userSchema);

module.exports = UserModel;
