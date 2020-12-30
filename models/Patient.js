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
    drugAllergies: {
        type: String,
    },
    foodAllergies: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    dateTaken: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
  
    maritalStatus: {
        type: String,
        required: true
    },
    doctorIncharge: {
        type: String,
        required: true
    },
  
    nurseIncharge: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model('patient', PatientSchema);