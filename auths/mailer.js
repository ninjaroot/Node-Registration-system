
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   Nodemailer Send email Function                                      // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////



const nodemailer = require('nodemailer');
require('dotenv').config();


// node mailer config
const transporter = nodemailer.createTransport({
  //email service i used gmail service
  service: 'gmail',
  //email auth 
  auth: {
    //email user
    user:process.env.EMAIL_USER ,
    //email password
    pass: process.env.EMAIL_PASSWORD
  }
});


// Promise function sending email 
function sendEmail (mailOptions, collection) {
    return new Promise(function (resolve, reject) {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) 
          reject(error) 
        else
      resolve(true)
         })
       })
      

}

module.exports = {sendEmail};
