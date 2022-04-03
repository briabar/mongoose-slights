const req = require('express/lib/request');
const Flight = require('../models/flight');

function getAllFlights(req, res) {
    Flight.find({}, function(err, allFlights) {
        res.render('index', {
            allFlights,
            title: 'Available Flights',
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add New Flight'
    });
}

function createFlight(req,res) {
    // if (req.body.departs === '') {
    //     req.body.daparts =
    // }
    console.log(req.body);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        console.log(err, 'this err')
        if (err) return res.redirect('/flights/new');
        console.log(flight)
        res.redirect('/flights');
    });
}

module.exports = {
    getAllFlights,
    newFlight,
    createFlight,
}