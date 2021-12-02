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
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Step'
    }
});

const Room = model('Room', roomSchema);

module.exports = Room;