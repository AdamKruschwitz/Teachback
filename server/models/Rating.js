const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    value: {
        type: Number
    }

});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;