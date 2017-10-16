'use strict';
var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller');

/* GET users Profile view. */
router.get('/profile', user_controller.profile);

module.exports = router;
