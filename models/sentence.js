const mongoose = require('mongoose');
const SentenceSchema = new mongoose.Schema({
    sentence: {
        type: String,
        required: true
    },
});
const Sentence = mongoose.model('Sentence', SentenceSchema);
module.exports = Sentence;