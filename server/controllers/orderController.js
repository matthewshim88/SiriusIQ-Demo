var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
  add: function(req, res){
    // console.log(req.body);
    Order.create(req.body, function(err, order){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log("order was saved");
        res.json(order);
      }
    })
  },
  getAll: function(req, res){
    Order.find({})
    .populate("_product")
    .populate("_customer")
    .exec(function(err, orderData){
      if(err){
        res.json(err);
      }else{
        res.json(orderData);
      }
    });
  },


}
