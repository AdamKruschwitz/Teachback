const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,

    },
    
    token: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    image: {
        type: String
    },

    uid: {
        type: String
    }

});

const User = model('User', userSchema);

module.exports = User;