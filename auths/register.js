var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require('mongodb');
var md5 = require('md5');
var mo = require("./monqu");
var ec = require("./emailcheck");



router.post('/register', async function (req, res, next) {
  try {
    var { name, email, phone, gender, pass } = req.body
    if (name && email && phone && gender && pass) {
      emailcheck(req,res)
    } else
      return res.send("Missingdata");
  
  } catch (error) {
    return res.send(error)
  }
});




//function check if user exist 
async function emailcheck(req, res) {
  var cheked = await ec.checkEmail(req.body.email, req)
  if (cheked == false) {
    return res.status(200).json("emai exist")
      } else if(cheked==true) {
        saveRgisterData(req,res)   
       }
}




// save regstration data in mongo db
async function saveRgisterData( req, res){
  // data variables for req.body...
  var { name, email, phone, gender, pass } = req.body
  //user data in json block
  user_data = {
    "u_name": name, "u_email": email,
    "u_phone": phone, "u_gender": gender,
    "u_pass": md5(pass)
  }
  /*Set our collection*/
  var users_coll = req.db.get('users');
  var reg_ex;
  //insert query
      reg_ex = await mo.getInsertResult(user_data, users_coll);
      if(reg_ex){
        console.log({db_res: reg_ex});
        return res.send("user_added");
      }
    }

module.exports = router;
