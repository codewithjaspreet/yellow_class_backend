const UserService = require('../services/user_service');



exports.register = async(req , res , next ) =>{

    try{

        const { name, email, password } = req.body;


        const successRes = await UserService.registerUser(
          name,
          email,
          password
        );


        res.json({status:200 , message:"User Registered Successfully"});

    }

    catch(error){

        throw(error);
    }
}

exports.login = async (req, res, next) => {
  try {
    const { email , password } = req.body;

    const user = await UserService.checkIfUserExist(email);

    if (user) {


     const  isMatching  = user.comparePassword(password);

     if(isMatching == false){

      throw new Error("Password is incorrect");
        
     }

     else{


      let token = {

        id:user._id,
        email:user.email

      };

      // token = jwt.sign(token , process.env.JWT_SECRET , {expiresIn:process.env.JWT_EXPIRES_IN});

      token = await UserService.generateToken(token , 'secret' , '1h');

      return res.json({status:200 , message:"User Logged In Successfully" , token:token});

     }


    } else {

        throw error;
    }

  } catch (error) {
    throw error;
  }
};