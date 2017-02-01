var mongoose = require('mongoose');
var Brand = mongoose.model('Brand');
var Product = mongoose.model('Product');

module.exports = {

  get: function(req, res){
    Brand.findOne({_id: req.params.id}, function(err, brand){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json(brand);
      }
    })
  },

  getAll: function(req, res){
    Brand.find({})
    .exec(function(err, brands){
      if(err){
        res.json(err);
      }else{
        res.json(brands);
      }
    });
  },

  add : function(req, res){
    Brand.findOne({brand: req.body.brand}, function(err, brand){
      if(!brand){
        Brand.create(req.body, function(err, result){
          if(err){
            console.log(err);
            res.json(err);
          }else{
            console.log(result);
            res.json({status: true, category: result});
          }
        })
      }else{
        res.json({status: false});
      }
    });
  }

}
