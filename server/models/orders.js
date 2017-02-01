var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  _product: {type: Schema.Types.ObjectId, ref:'Product'},
  _customer: {type:Schema.Types.ObjectId, ref:'Customer'},
  quantity: {type: Number}
}, {timestamps:true});


// *** IN THE FUTURE IMPLEMENT SOMETHING LIKE BELOW ***

// ** Add Payment Methods, Payment Service

// var OrderDetailsSchema = new Schema({
//   product: { type: Schema.Types.ObjectId, ref: 'Product' },
//   quantity: Number,
//   total: {type: Number, get: getPrice, set: setPrice }
// });
//
// var OrderSchema = new Schema({
//   // buyer details
//   name: String,
//   user: { type: Schema.Types.ObjectId, ref: 'User' },
//   shippingAddress: String,
//   billingAddress: String,
//   // price details
//   items: [OrderDetailsSchema],
//   shipping: {type: Number, get: getPrice, set: setPrice, default: 0.0 },
//   tax: {type: Number, get: getPrice, set: setPrice, default: 0.0 },
//   discount: {type: Number, get: getPrice, set: setPrice, default: 0.0 },
//   subTotal: {type: Number, get: getPrice, set: setPrice },
//   total: {type: Number, required: true/*, get: getPrice, set: setPrice */},
//   // payment info
//   status: { type: String, default: 'pending' }, // pending, paid/failed, delivered, canceled, refunded.
//   paymentType: { type: String, default: 'braintree' },
//   paymentStatus: Schema.Types.Mixed,
//   nonce: String,
//   type: String
// });


module.exports = mongoose.model('Order', OrderSchema);
