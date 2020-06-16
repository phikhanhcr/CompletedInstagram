var Post = require('../../Model/Post/newPost');
var User = require('../../Model/User/User')
var Notification = require('../../Model/Notification/Notification')
module.exports.post = async (req, res) => {
  var posts = await Post.find();
  res.json(posts)
}
module.exports.uploadImage = async (req, res) => {
  var newPost = await Post.create(req.body.newPost)
  res.json(newPost)
}

module.exports.addComment = async (req, res) => {
  const post = await Post.findById({ _id: req.params.id })
  const lengthComment = post.comment.length;
  const listUser = await User.findById({ _id: req.body.comment.user })
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
  res.json(newUser);
}

module.exports.editPass = async (req, res, next) => {
  await User.findOneAndUpdate({ _id: req.params.id }, { $set: { password: req.body.newPass.password } })
    .then(user => {
      res.json(user);
    })
}

// getNotification
module.exports.getAllNotification = async (req, res) => {
  const notification = await Notification.find()
  res.json(notification)
}


module.exports.getNotification = async (req, res) => {
  // ID is also id of current user
  console.log(req.params.id)
  const notification = await Notification.find({ postOwner: req.params.id })
  res.json(notification)
}

module.exports.postNewNoti = async (req, res) => {
  await Notification.create(req.body.obj)
  console.log("success");
}




module.exports.postNotification = async (req, res) => {

  const postOwner = await Notification.find({ postOwner: req.params.id })
  console.log("post " + postOwner);

  const lengthNotification = postOwner[0].notification.length;
  console.log(lengthNotification)
  if (lengthNotification === 0) {
    postOwner[0].notification[0] = {
      who: req.body.notification.who,
      action: req.body.notification.action
    }
  } else {
    postOwner[0].notification[lengthNotification] = {
      who: req.body.notification.who,
      action: req.body.notification.action
    }
  }
  postOwner[0].save();
}
