
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                      Mongodb queries (insert-find-update-delet) using monk                            // 
//                                                                                                      // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var express = require('express');
var router = express.Router();
var path = require('path');
var mongo = require('mongodb');




//Promise function insert data into mongodb
function getInsertResult(data, collection) {
  return new Promise(function (resolve, reject) {
    /*Submit user data to the DB*/
    collection.insert(data, function (err, doc) {
      if (err) reject(err);
      else {
        resolve(doc);
      }
    });
  });
}
//Promise function data data in mongodb
function getFindResult(query, collection) {
  return new Promise(function (resolve, reject) {
    collection.find(query, function (err, result) {
      if (err) reject(err);
      else {
        resolve(result);
      }
    });
  });
}

 //Promise function update data into mongodb
function getUpdateResult(query, data, collection, req) {
  return new Promise(function (resolve, reject) {
    /*Submit user data to the DB*/
    req.db.get(collection).update(query,data, function (err, doc) {
      if (err) reject(err);
      else {
        resolve(doc);
      }
    });
  });
}
// //Promise function delet data in mongodb

// function getDeletResult(query, data, collection, req) {
//   return new Promise(function (resolve, reject) {
//     /*Submit user data to the DB*/
//     req.db.get(collection).remove(query,data, function (err, doc) {
//       if (err) reject(err);
//       else {
//         resolve(doc);
//       }
//     });
//   });
// }


//exports mongodb functions to use it from anaywhere in the express server

module.exports = {getFindResult,getInsertResult,getUpdateResult,};
