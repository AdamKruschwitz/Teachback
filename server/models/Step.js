const { Schema, model } = require('mongoose');

const stepSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Step = model('Step', stepSchema);

module.exports = Step;