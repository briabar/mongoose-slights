const req = require('express/lib/request');
const flightMod = require('../models/flight');
const Flight = flightMod.Flight;
const Ticket = require('../models/ticket');

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
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        console.log(err, 'this err')
        if (err) return res.redirect('/flights/new',{
            title: 'Add New Flight'
        });
        res.redirect('/flights');
    });
}

function showFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if(err) {
            return res.render('flights/');
        }
        Ticket.find({flight: flight._id}, function(err, tickets) {   
            console.log(tickets);    
            if(err || tickets.length === 0) {
                return res.render('flights/show', {
                    title: flight.flightNo, 
                    flight: flight,
                    tickets: false});
            }
            res.render('flights/show', {
                title: flight.flightNo, 
                flight: flight,
                tickets: tickets});
        });
    });
}


module.exports = {
    getAllFlights,
    newFlight,
    createFlight,
    showFlight,
}