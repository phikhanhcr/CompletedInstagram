const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  avatar : {type : String , trim : true} , 
  img :{type : String , trim : true} 
})
var Post = mongoose.model('Post' , postSchema , 'posts');
module.exports = Post;