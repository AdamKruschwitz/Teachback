const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
});

const Tag = model('Tag', tagSchema);

module.exports = Tag;