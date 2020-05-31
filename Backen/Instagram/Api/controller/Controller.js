var Post = require('../../Model/Post/newPost');
var User = require('../../Model/User/User')
module.exports.post = async (req, res) => {
  var posts = await Post.find();
  res.json(posts)
}
module.exports.uploadImage = async (req, res) => {
  var newPost = await Post.create(req.body.newPost)
  console.log(newPost);
  res.json(newPost)
}

module.exports.addComment = async (req, res) => {
  const post = await Post.findById({ _id: req.params.id })
  console.log("Post " + post);
  const lengthComment = post.comment.length;
  console.log(lengthComment);
  const listUser = await User.findById({_id : req.body.comment.user}) 
  console.log(listUser.username)
  if (lengthComment === 0) {
    post.comment[0] = {
      user: listUser.username,
      message: req.body.comment.comment
    }
  } else {
    post.comment[lengthComment] = {
      user: listUser.username,
      message: req.body.comment.comment
    }
  }
  post.save();
}

module.exports.user = async (req, res) => {
  var users = await User.find();
  res.json(users)
}

module.exports.createUser = async (req, res, next) => {

  var newUser = await User.create(req.body.newUser);
  console.log(newUser)
  res.json(newUser);
}

module.exports.editPass = async (req, res, next) => {
  await User.findOneAndUpdate({ _id: req.params.id }, { $set: { password: req.body.newPass.password } })
    .then(user => {
      res.json(user);
    })
}