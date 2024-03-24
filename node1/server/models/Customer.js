const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the schema for employees
const EmployeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, { collection: 'employees' }); // Set the collection name to 'employees'

module.exports = mongoose.model('Employee', EmployeeSchema);