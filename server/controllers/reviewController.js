var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Product = mongoose.model('Product');

module.exports = {

  get: function(req, res){
    Review.find({_product_id: req.params.id}, function(err, reviews){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        console.log(reviews);
        res.json(reviews);
      }
    })
  },

  getAll: function(req, res){
    Review.find({})
    .exec(function(err, reviews){
      if(err){
        res.json(err);
      }else{
        res.json(reviews);
      }
    });
  },

  add : function(req, res){
    Review.create(req.body, function(err, result){
      if(err){
        console.log(err);
        res.json(err);
      }else{ // find the corresponding Product and update it with new Review
        Product.findOne({_id: req.body._product_id}, function(err, product){
          if(err){ return res.json(err); }
          product._reviews.push(result);
          product.save(function(err){
            if(err){return res.json(err);}
            res.json(product);
          });
        })
      }
    })
  },

  delete: function(req, res){
    Product.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json({message: "Review Deleted!"});
      }
    });
  },

}
