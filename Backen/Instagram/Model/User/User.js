const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username : {type : String , trim : true },
  email : {type : String , trim : true } ,
  password : {type : String , trim : true } 
})
var User = mongoose.model('User' , userSchema , 'users');
module.exports = User;