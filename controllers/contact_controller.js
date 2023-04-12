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


exports.getUserData = async (req, res, next) => {
  try {
    const { userId } = req.body;

    let contact = await ContactService.getContactList({
      userId,
      
    });

    res.status(200).json({
      message: "Contact List Fetched successfully",
      contact,
    });
  } catch (error) {
    next(error);
  }
};