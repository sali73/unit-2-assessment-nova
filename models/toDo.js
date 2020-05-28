const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const doSchema = new Schema({
    data: { type: String, required: true },
}, { timestamps: true });
const ToDo = mongoose.model('ToDo', doSchema);
module.exports = ToDo;
