const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    rating: {
        type: Array,
        required: true,
        min: 1,
        max: 5
    }
})

const movieModel = mongoose.model('movieCart', movieSchema);

module.exports = movieModel;