const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'úsers'
    },
    name: {
        type: String,
        required: true
    },
    wardNumber: {
        type: String,
        required: true,
    },
    dateAdmitted: {
        type: Date,
        default: Date.now
    },
    address: {
        type: String,
        required: true
    },
    stateOfOrigin: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    drugAllergies: {
        type: String,
    },
    foodAllergies: {
        type: String,
    },
    maritalStatus: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('patient', PatientSchema);