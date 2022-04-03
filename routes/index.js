var express = require('express');
var router = express.Router();
const flightCtrl = require('../controller/flights');

/* GET home page. */
router.get('/', flightCtrl.getAllFlights);

module.exports = router;
