const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const messageSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        validator:{
             validator: validator.isEmail,
             message: '{VALUE} is not a valid email'
        }
    },
    phone: {
        Type: Number,
        // validator: {
        //     validator: validator.isMobilePhone,
        //     message: '{VALUE} is not a valid phone number'
        // }
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
