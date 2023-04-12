const ContactService = require("../services/contact_service");


exports.createContact = async(req,res,next) => {


    try{


        const {userId , firstName , lastName , designation , phoneNumber}  = req.body;


        let contact = await ContactService.createContact({userId , firstName , lastName , designation , phoneNumber});

        res.status(200).json({

            message:"Contact created successfully",
            contact
        })


    }

    catch(error){
        next(error);
    }

}