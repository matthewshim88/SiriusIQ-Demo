var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: {type: String, required: true},
  price: {type: Number, required: true, min: 0},
  stock: {type: Number, default: 1},
  brand: {type: String},
  category: {type: String, required: true},
  imgUrl: {type: String},
  desc: {type: String, required: true},
  _reviews: [{type: Schema.Types.ObjectId, ref:"Review"}]
}, { timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);
