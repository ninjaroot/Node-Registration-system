
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  Get html page functions                                              // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////


var express = require('express');
var router = express.Router();



var path = require('path');
// get login page
router.get('/', function (req, res, next) {
  if(req.session.usertAuth!== "loged")
   return res.sendFile(path.join(__dirname + '/../views/login.html'));
    else if(req.session.usertAuth)
     return res.sendFile(path.join(__dirname + '/../views/main.html'));
});

// get tha main html page after user loged sucsess
router.get('/loged', function (req, res, next) {
  if(req.session.usertAuth)
    return res.sendFile(path.join(__dirname + '/../views/main.html'));
     else res.redirect('/');

})
// get registration html page
router.get('/register', function (req, res, next) {
  if(req.session.usertAuth!== "loged")
   return res.sendFile(path.join(__dirname + '/../views/register.html'));
    else res.redirect('/loged');
});

// get Forget password html page
router.get('/forget_pass', function (req, res, next) {
  if(req.session.usertAuth!== "loged")
    return res.sendFile(path.join(__dirname + '/../views/forget.html'));
     else res.redirect('/loged');

});

// afer user logout redirect to html login page
router.get('/logout', function (req, res, next) {
  req.session.usertAuth = "";
  return res.sendFile(path.join(__dirname + '/../views/login.html'));
});

// verification html page to enert security code for reset password
router.get('/verification', function (req, res, next) {
  if(req.session.usertAuth!== "loged"){
  if(req.session.reset == "true")
  return res.sendFile(path.join(__dirname + '/../views/code.html'));
  else
  res.redirect('/forget_pass');
  }else  res.redirect('/loged');

});



// get reset password page 
router.get('/reset', function (req, res, next) {
  if(req.session.resetPass)
  return res.sendFile(path.join(__dirname + '/../views/reset.html'));
  else
  res.redirect('/forget_pass');

})
// router.get('/log', function (req, res, next) {
//   return res.sendFile(path.join(__dirname + '/../views/reseta.html'));

// })



module.exports = router;
