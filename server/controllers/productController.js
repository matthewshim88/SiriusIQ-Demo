var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  get : function(req, res){
    // console.log(req.params.id);
    Product.findOne({_id: req.params.id}, function(err, product){
      if(err){
        res.json(err);
      }
      else{
        res.json(product);
      }
    })
  },
  getAll: function(req, res){
    Product.find({})
    .exec(function(err, products){
      if(err){
        res.json(err);
      }else{
        res.json(products);
      }
    });
  },
  add : function(req, res){
    Product.findOne({title: req.body.title}, function(err, product){
      if(!product){
        Product.create(req.body, function(err, result){
          if(err){
            console.log(err);
            res.json(err);
          }else{
            res.json({status: true, product: result});
          }
        })
      }else{
        res.json({status: false});
      }
    });
  },
  delete: function(req, res){
    Product.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json({message: "Product Deleted!"});
      }
    });
  },
  filterCategory: function(req, res){
    console.log(req.params.id);
    Product.find({ category: req.params.id }, function(err, product){
      if(err){
        res.json(err);
      }else{
        console.log(product);
        res.json(product);
      }
    })
  },
  filterBrand: function(req, res){
    console.log(req.params.id);
    Product.find({ brand: req.params.id }, function(err, product){
      if(err){
        res.json(err);
      }else{
        console.log(product);
        res.json(product);
      }
    })
  },

  updateQty : function(req, res){
    Product.findOne({_id: req.params.id}, function(err, product){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        product.qty -= req.body.qty;
        if(product.qty < 0){
          product.qty = 0;
        }
        product.save(function(err, product){
          if(err){
            return res.json(err);
          }res.json(product);
        });
      }
    })
  }


}
