const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport : {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival : {
        type: Date
    },

});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['America', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'] 
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999 }
    ,
    departs: {
        type: Date,
        default: setYear(),
    },
    destination: [destinationSchema]
});

function setYear() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let newDate = new Date(year + 1, month, day);
    return newDate;
};

const Flight = mongoose.model("Flight", flightSchema);
const Destination = mongoose.model("Destination", destinationSchema);

module.exports = {
    Flight,
    Destination,
}
