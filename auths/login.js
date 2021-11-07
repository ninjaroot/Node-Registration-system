
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                   Login Functions                                                     // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var router = express.Router();
var path = require('path');
var md5 = require('md5');
var mongodb = require("./monqu");
var email = require("./emailcheck");



// login function
router.post('/login', async function (req, res, next) {
  //using try and catch for handling the erorrs
  try {
    var { email, pass } = req.body
    //first check if email and pass in the requset
    if (email && pass) {
      //run function check if email exist
      await emailcheck(req, res)
    } else
      return res.send("wrong_password")
  } catch (error) {
    return res.send(error)
  }
});



//function check if user exist 
async function emailcheck(req, res) {
  try {
    var cheked = await email.checkEmail(req.body.email, req)
    if (cheked == true) {
      return res.send("wrong_password")
      //if email exist
    } else if (cheked == false) {
      //run the function check if email and  password true
      await passwordCheck(req, res)
    }
  } catch (error) {
    return res.send(error)
  }

}

// check the email and password is true or false
async function passwordCheck(req, res) {
  try {
    pass = md5(req.body.pass)
    // mongodb collction
    var users_coll = req.db.get('users');
    //mongodb query
    var query = { "u_email": req.body.email, u_pass: pass };
//find the result in mongodb 
    passCheck = await mongodb.getFindResult(query, users_coll);
    if (passCheck[0]) {
      // if password true add to session.usertAuth loged 
      req.session.usertAuth = "loged"
      // in front end when recive loged the main to html will open 
      return res.send("loged")
    } else
      return res.send("wrong_password")
  } catch (err) {
    return res.send(error)
  }
}

module.exports = router;
