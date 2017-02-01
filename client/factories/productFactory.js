app.factory('productFactory', ['$http', '$location', function($http, $location){
  var factory = {};

  factory.index = function(callback){
    $http.get('/products/get')
    .then(function(returnProducts){
      callback(returnProducts.data);
    })
  }

  factory.getOne = function(productID, callback){
    $http.get('/products/get/' + productID)
    .then(function(returnData){
      product = returnData.data;
      callback(product);
    });
  }

  factory.add = function(product, callback){
    console.log(product);
    $http.post('/addProduct', product)
    .then(function(data){
      callback(data);
    });
  }

  factory.filterByCategory = function(category, callback){
    $http.get('/product/filter/category/' + category.category)
    .then(function(products){
      callback(products);
    });
  }

  factory.filterByBrand = function(brand, callback){
    console.log(brand);
    $http.get('/product/filter/brand/' + brand.brand)
    .then(function(products){
      callback(products);
    });
  }

  factory.updateQty = function(updateProduct, callback){
    $http.put('/product/update/' + updateProduct._id, updateProduct)
    .then(function(response){
      callback(response);
    })
  }

  return factory;
}]);
