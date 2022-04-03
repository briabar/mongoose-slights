const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
});

function setYear() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let newDate = new Date(year + 1, month, day);
    return newDate;
};

module.exports = mongoose.model('Flight', flightSchema);