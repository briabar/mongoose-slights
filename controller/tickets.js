const req = require('express/lib/request');
const flightMod = require('../models/flight');
const ticket = require('../models/ticket');
const Flight = flightMod.Flight;
const Ticket = require('../models/ticket');
// const Destination = require('../models/destination')

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) {
            console.log(err, 'this error');
            return res.redirect(`flights/show/${req.params._id}`, {
                title: flight.flightNo
            });
        }
        res.render('flights/tickets/new', {
            flight,
            title: `New Ticket for ${flight.flightNo}`
        });
    });
}

function createTicket(req, res) {
    const ticket = new Ticket(req.body);
    console.log(ticket);
    Flight.findById(req.params.id, function (err, flight) {
        if (err) {
            console.log(err, 'this error');
            return res.redirect('/flights');
        }
        ticket.flight = flight._id;
        ticket.save(function(err) {
            if(err) {
                console.log(err, 'this err');
                return res.redirect('/flights');
            }
            res.redirect(`/flights/show/${req.params.id}`);
        })
    })
}

// function deleteTicket(req, res) {
//     console.log('pizza')
//     Ticket.findById(req.params.id, function(err, ticket) {
//         if (err) {
//             console.log(err, ' this err');
//             return res.redirect(`/flights/show/${req.params.id}`)
//         }
//         ticket.remove(function (err) {
//             if (err) {
//                 console.log(err, ' this err');
//                 return res.redirect(`/flights/show/${req.params.id}`)
//             }
//             return res.redirect(`/flights/show/${req.params.id}`)
//         });
//     });
// }

module.exports = {
    newTicket,
    createTicket,
    // deleteTicket
}