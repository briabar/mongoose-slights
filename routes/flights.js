const express = require('express');
const router = express.Router();
const flightCtrl = require('../controller/flights');

router.get('/', flightCtrl.getAllFlights);
router.get('/new', flightCtrl.newFlight);
router.post('/new', flightCtrl.createFlight);

module.exports = router;