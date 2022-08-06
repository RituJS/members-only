var express = require('express');
var router = express.Router();
var messageController = require('../controllers/messageController');
const middleware = require('./middleware')


router.get('/new', middleware.secured, messageController.message_create_get)

router.post('/new', middleware.secured, messageController.message_create_post)

router.get('/:messageId/delete', messageController.delete_message_get)

router.post('/:messageId/delete', messageController.delete_message_post)

module.exports = router;