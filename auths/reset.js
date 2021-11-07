
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   Reset Password Functions                                            // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////



var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var md5 = require('md5');
var email = require("./emailcheck");
var mongodb = require("./monqu");
var mail = require("./mailer");

// forget password function
router.post('/forgetPass', async function (req, res, next) {
  //using try and catch for handling errors
  try {
    // check if the email exist in the data request
    if (req.body.email) {
      // check if email user exist
      await emailcheck(req, res)
    } else {
      return res.send("email dosen't exsist")
    }
  } catch (error) {
    return res.send(error)
  }
});
// check code function 
router.post('/code', async function (req, res, next) {
  try {
    // check if the code  exist in the data request and check if email in sesstion
    if (req.body.code && req.session.email) {
      //function that check the sent security code in requset equal the exist in mongodb
      codeCheck(req, res)
    } else {
      return res.send("wrongcode")
    }
  } catch (error) {
    return res.send(error)

  }
});

// reset password function
router.post('/reset', async function (req, res, next) {
  try {
    if (req.session.email) {
      if (req.body.pass) {
        var code = await updatePassword(req, res)
      } else return res.status(200).json({ reset_password: "missing data" })
    } else return res.status(200).json({ reset_password: "missing data" })
  } catch (error) {
    return res.send(error)
  }
});


// function check if email exist in user data
async function emailcheck(req, res) {
  try {
    var cheked = await email.checkEmail(req.body.email, req)
    if (cheked == true) {
      return res.send("email dosen't exsist")
    } else if (cheked == false) {
      // run function check if user have alredy security code for reset his password
      await checkCodeExist(req, res)
    }
  } catch (error) {
    return res.send(error)
  }
}




// function check if user have alredy security code for reset his password
async function checkCodeExist(req, res) {
  try {
    //mongodb collction
    var users_coll = req.db.get('reset');
    var query = { "u_email": req.body.email };
    // run function get result form mongodb database
    code = await mongodb.getFindResult(query, users_coll);
    if (code[0]) {
      //if the user alredy have securtiy code // run function update the code and date
      updatecode(req, res)
    } else
    //if user dosen't  securtiy code // run function that insert security code 
      insertCode(req, res)
  } catch (error) {
    return res.send(error)
  }
}

// function that insert security code  for user used it for reset his password
async function insertCode(req, res) {
  try {
    // set true sesstion reset to open security code  page
    req.session.reset = "true"
    // set the email in sesstion to use it
    req.session.email = req.body.email
    // run function that genrate code and send the number of code we want in this we put 7 to return securty code of 7 numbers and leters 
    var code = await codegenrate(7)
    //set seccurty code in sesstion to use it 
    req.session.code = code
    var currentDate = Date.now();
    // set the expireation time of code 300,000 milliseconds/ 5 minutes
    var date = currentDate + 300000
    // the data that will insert into reset collction in mongodb database
    user_data = {
      "u_email": req.body.email,
      "u_code": md5(code),
      "u_date": date
    }
    reg_ex = []
    //database collction
    var users_coll = req.db.get('reset');
    // run insert query and wait the return 
    reg_ex = await mongodb.getInsertResult(user_data, users_coll);
    //if the isert is donw 
    if (reg_ex) {
      //send the email containt security code for reset password
     sendemail(code, req.body.email,res)
    }
  } catch (error) {
    return res.send(error)
  }
}

// that function run when the user have alredy security code --and update new security code and new expireation time for code 
async function updatecode(req, res) {
  try {
    req.session.reset = "true"
    req.session.email = req.body.email
    var code = await codegenrate(7)
    req.session.code = code
    var currentDate = Date.now();
    var date = currentDate + 300000
    var users_coll = 'reset'
    var query = { u_email: req.body.email };
    var newData = { $set: { u_code: md5(code), u_date: date } };
    reg_ex = await mongodb.getUpdateResult(query, newData, users_coll, req);
    if (reg_ex) {
      sendemail(code, req.body.email,res)
    }
  
  } catch (error) {
  //  return res.send(error)

  }
}

// promise function gnerate random code for use it in securtiy code and return the random code 
function codegenrate(length, collection) {
  return new Promise(function (resolve, reject) {
    // randoms capital-small letters and numbers form 0 to 9 
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabdefgijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    if (result)
      resolve(result);
    else
      reject
  });
}
// send email function that send securtiy code for user to reset his password
async function sendemail(code, email ,res) {
  try {
    const mailOptions = {
      from: 'regstreation',
      to: "" + email + "",
      subject: 'reset password',
      text: 'code:' + code
    };
    //run the nodemailer send email function and wait the return 
     email_m = await mail.sendEmail(mailOptions)
     if(email_m == true){
     // if email is sent redirct user to security code page to put the security code and reset his password
     return res.send('reset');
     }
     else{
     //if there is erorr in sending the email return erorr
     return res.send('erorr');
     }
    } catch (error) {
      //if there is erorr in sending the email return erorr
     return res.send(erorr)
    
  }
}


// function that check if the code is equal the code in the mongodb databease and expireation time of code 
async function codeCheck(req, res) {
  try {
    code_data = md5(req.body.code)
    var users_coll = req.db.get('reset');
    var query = { "u_email": req.session.email, u_code: code_data };
    code = await mongodb.getFindResult(query, users_coll);
    if (code[0]) {
      var current_date = Date.now();
      if (code[0].u_date > current_date) {
        req.session.resetPass = "true"
        req.session.code = code_data
        return res.send('reset');
      } else return res.send("timeBased")
    } else
      return res.send("wrongcode")
  } catch (error) {
    return res.send(error)

  }
}


// update pssword function tha update the password in mongodb database
async function updatePassword(req, res) {
  try {
    var users_coll = 'users'
    var query = { "u_email": req.session.email };
    var newPassword = { $set: { u_pass: md5(req.body.pass) } };
    code = await mongodb.getUpdateResult(query, newPassword, users_coll, req);
    if (code.nModified) {
      req.session.resetPass = ""
      req.session.reset = ""
      res.send("passchanged")
    }
    else
      return res.send("erorr")
  
  } catch (error) {
    return res.send(error)

  }
}



module.exports = router;
