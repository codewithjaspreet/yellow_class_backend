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

    res.json({ status: true, success: contact });
  } catch (error) {
    next(error);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const { id } = req.body;
    let deletedData = await ContactService.deleteCurrentContact(id);
    res.json({ status: true, success: deletedData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }

  
};

exports.updateContact = async (req, res, next) => {
  try {
    const { id, firstName, lastName, designation, phoneNumber } = req.body;

    let updatedContact = await ContactService.editContact(
      id,
      firstName,
      lastName,
      designation,
      phoneNumber
    );

    res.json({ status: true, success: updatedContact });
  } catch (error) {
    next(error);
  }
};
