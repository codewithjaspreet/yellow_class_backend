const UserService = require('../services/user_service');



exports.register = async(req , res , next ) =>{

    try{

        const {name , email , designation}  = req.body;


        const successRes = await  UserService.registerUser(name , email , designation);


        res.json({status:200 , message:"User Registered Successfully"});

    }

    catch(error){

        throw(error);
    }
}