const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    tutorial: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Tutorial'
    },
    currentStep: {
        type: Number,
        required: true,
        default: 0
    }
});

const Room = model('Room', roomSchema);

module.exports = Room;