const mongoose = require('mongoose')
const Schema = mongoose.Schema; 
const notificationSchema = new mongoose.Schema({
  postOwner : { type: Schema.Types.ObjectId, ref: "User" },
  notification : [{
    who : { type: String, trim: true },
    action : { type: String, trim: true  }
  }]
})
var Notification = mongoose.model("Notification" , notificationSchema, 'notification')
module.exports = Notification;