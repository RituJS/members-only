var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var middleware = require('./middleware')

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.get('/:userId', (req, res, next) => {
	res.send(req.params.userId)
})
module.exports = router;
