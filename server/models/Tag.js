const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    frequency: {
        type: Number,
        default: 0
    }
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;