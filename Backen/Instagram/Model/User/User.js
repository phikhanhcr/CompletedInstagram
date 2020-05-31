const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  avatar : {type : String , trim : true , default:"https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/73244435_2997608627131456_2957342681333760000_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=5U53gYmzXVoAX-MOTT3&_nc_ht=scontent.fhan2-3.fna&oh=1755644c07fb47f26d8a70aad09046f4&oe=5EEEBDBC"},
  username : {type : String , trim : true },
  email : {type : String , trim : true } ,
  password : {type : String , trim : true } 
})
var User = mongoose.model('User' , userSchema , 'users');
module.exports = User;