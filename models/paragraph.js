const mongoose = require('mongoose');
const ParagraphSchema = new mongoose.Schema({
    paragraph: {
        type: String,
        required: true
    },
});
const Paragraph = mongoose.model('Paragraph', ParagraphSchema);
module.exports = Paragraph;