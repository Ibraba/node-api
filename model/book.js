const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create book Schema & model
const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    author:{
        type: String,
        required: [true, "Author is required!"]
    },
    availibility:{
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model('book',BookSchema);

module.exports = Book;

