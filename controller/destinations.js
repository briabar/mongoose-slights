const req = require('express/lib/request');
const flightMod = require('../models/flight');
const Flight = flightMod.Flight;
const Destination = flightMod.Destination;
// const Destination = require('../models/destination')

function newDestination(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    Flight.findById(req.params.id, function(err, flight) {
        flight.destination.push({ airport: req.body.airport, arrival: req.body.arrival});
        flight.save(function(err) {
            console.log(err, ' this err');
            if (err) return res.redirect('/flights/');
            res.redirect(`/flights/show/${flight._id}`);
        })
    })    
};

module.exports = {
    newDestination
}