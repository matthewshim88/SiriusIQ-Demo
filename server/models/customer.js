var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CustomerSchema = new Schema({
  name: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Customer', CustomerSchema);
