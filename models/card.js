const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    mastercard: {
        type: String,
        required: true
    },
    visa: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
});
const Card = mongoose.model('Card', CardSchema);
module.exports = Card;