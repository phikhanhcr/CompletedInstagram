const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const postSchema = new mongoose.Schema({
  avatar: { type: String, trim: true },
  img: { type: String, trim: true },
  description: { type: String, trim: true , default:""},
  by: { type: Schema.Types.ObjectId, ref: "User" },
  comment: [
    {
      user: { type: String, trim: true },
      message: { type: String, trim: true }
    }
  ]
})
var Post = mongoose.model('Post', postSchema, 'newPost');
module.exports = Post;