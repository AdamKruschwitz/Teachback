const { Schema, model } = require('mongoose');

const tutorialSchema = new Schema( {
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    steps: [{
        type: Schema.Types.ObjectId,
        ref: 'Step'
    }],
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }],
    searchable: {
        type: Boolean
    },
    title: {
        type: String,
        trim: true
    }
});

const Tutorial = model('Tutorial', tutorialSchema);

module.exports = Tutorial;