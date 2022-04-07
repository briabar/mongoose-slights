const express = require('express');
const router = express.Router();
const flightCtrl = require('../controller/flights');
const destinationsCtrl = require('../controller/destinations');
const ticketsCtrl = require('../controller/tickets');

router.get('/', flightCtrl.getAllFlights);
router.get('/new', flightCtrl.newFlight);
router.post('/new', flightCtrl.createFlight);
router.get('/show/:id', flightCtrl.showFlight);
router.post('/destinations/:id', destinationsCtrl.newDestination);
router.get('/tickets/new/:id', ticketsCtrl.newTicket);
router.post('/tickets/new/:id', ticketsCtrl.createTicket);
// router.get('/tickets/delete/:id', ticketsCtrl.deleteTicket);
module.exports = router;