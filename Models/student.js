const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

let studentData = mongoose.model('Students', StudentSchema);

module.exports = studentData;
