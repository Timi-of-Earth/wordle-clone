const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: [true, 'must provide name'],
        minlength: [5, 'Must be at least 3 characters'],
        maxlength: [5, 'Cannot be more than 20 characters']
    }
});

module.exports = mongoose.model('Word', WordSchema);