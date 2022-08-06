var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var messageController = require('../controllers/messageController');


router.get('/', messageController.get_message);

router.get('/sign-up', userController.user_signup_get)

router.post('/sign-up', userController.user_signup_post)

router.get('/login', userController.user_login_get)

router.post('/login', userController.user_login_post)

router.get('/logout', userController.user_logout)

module.exports = router;
