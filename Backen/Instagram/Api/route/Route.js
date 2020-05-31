const express = require('express');
const router = express.Router();
const controller = require('../controller/Controller');


router.get('/post' , controller.post);

router.post('/post' , controller.uploadImage);

router.put('/post/:id' , controller.addComment)

router.get('/user' , controller.user);

router.post('/user' , controller.createUser);

router.put('/user/:id' , controller.editPass)



module.exports = router;