var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var Product = mongoose.model('Product');

module.exports = {

  get: function(req, res){
    Category.findOne({_id: req.params.id}, function(err, category){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json(category);
      }
    })
  },

  getAll: function(req, res){
    Category.find({})
    .exec(function(err, categories){
      if(err){
        res.json(err);
      }else{
        res.json(categories);
      }
    });
  },

  add : function(req, res){
    Category.findOne({category: req.body.category}, function(err, category){
      if(!category){
        Category.create(req.body, function(err, result){
          if(err){
            res.json(err);
          }else{
            res.json({status: true, category: result});
          }
        })
      }else{
        res.json({status: false});
      }
    });
  }

}
