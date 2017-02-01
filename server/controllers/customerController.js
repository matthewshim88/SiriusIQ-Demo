var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
  getAll: function(req, res){
    Customer.find({})
    .exec(function(err, customers){
      if(err){
        res.json(err);
      }else{
        res.json(customers);
      }
    });
  },
  add : function(req, res){
    Customer.findOne({name: req.body.name}, function(err, customer){
      if(!customer){
        Customer.create(req.body, function(err, result){
          if(err){
            console.log(err);
            res.json(err);
          }else{
            res.json({status: true, customer: result});
          }
        })
      }else{
        res.json({status: false});
      }
    });
  },

  delete: function(req, res){
    Customer.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json({message: "Customer Deleted!"});
      }
    });
  },

}
