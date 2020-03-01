const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({

    name: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    removable: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
    ,
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

});