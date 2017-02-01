var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  _product_id: {type: Schema.Types.ObjectId, ref:"Product"},
  _user: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, required: true},
  text: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Review', ReviewSchema);
