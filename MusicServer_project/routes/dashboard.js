﻿'use strict';
var express = require('express');
var router = express.Router();
var dashboard_controller = require('../controllers/dashboard_controller');

/* GET dashboard .*/
router.get('/', dashboard_controller.dashboard_page);
router.get('/artists', dashboard_controller.dashboard_artists);
module.exports = router;