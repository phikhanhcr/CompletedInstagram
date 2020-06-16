const express = require('express');
const router = express.Router();
const controller = require('../controller/Controller');


router.get('/post' , controller.post);

router.post('/post' , controller.uploadImage);

router.put('/post/:id' , controller.addComment)

router.get('/user' , controller.user);

router.post('/user' , controller.createUser);

router.put('/user/:id' , controller.editPass)

router.get('/notification' , controller.getAllNotification)

router.get('/notification/:id' , controller.getNotification)

router.put('/notification/:id' , controller.postNotification)

router.post('/notification' , controller.postNewNoti)

module.exports = router;