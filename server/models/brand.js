var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BrandSchema = new Schema({
  brand: {type: String, required:true}
})

module.exports = mongoose.model('Brand', BrandSchema);
