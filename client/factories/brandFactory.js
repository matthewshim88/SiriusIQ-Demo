app.factory('brandFactory', ['$http', '$location', function($http, $location){
  var factory = {};

  factory.index = function(callback){
    $http.get('/brands')
    .then(function(returnBrands){
      callback(returnBrands.data);
    })
  }

  factory.get = function(brand, callback){
    $http.get('/brands/get/' + brand)
    .then(function(returnData){
      brand = returnData.data;
      callback(brand);
    });
  }

  factory.add = function(brand, callback){
    console.log(brand);
    $http.post('/addBrand', brand)
    .then(function(data){
      callback(data);
    });
  }

  return factory;
}]);
