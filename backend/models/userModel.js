const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your fullname']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    confirmation: {
        type: String,
        required: [true, 'Please confirm your password']
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)