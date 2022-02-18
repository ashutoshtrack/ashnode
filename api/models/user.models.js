const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    dob: {
        type: String,
        default: null
    },
    state: {
        type: String,
        default: null
    },
    createdAt: {
        type: String,
        default: Date.now,
    }
});


module.exports = mongoose.model('users', userSchema);