 

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  Check email exist Function                                           // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 var mongodb = require("./monqu");




 // function check if email exist and return true or false 
  async function checkEmail(email, req) {

    var users_coll = req.db.get('users');
    var query = { "u_email":email };
    var exist_ex = [];
    exist_ex = await mongodb.getFindResult(query, users_coll);
    if (exist_ex[0]) {
      //if email exsit
      return false
    } else {
    //if email dosen't exsit
      return true
    }
  } 

//export checkEmail function
  module.exports = { checkEmail };