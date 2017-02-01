app.factory('categoryFactory', ['$http', '$location', function($http, $location){
  var factory = {};

  factory.index = function(callback){
    $http.get('/categories')
    .then(function(returnCategories){
      callback(returnCategories.data);
    })
  }

  factory.get = function(category, callback){
    $http.get('/categories/get/' + category)
    .then(function(returnData){
      category = returnData.data;
      callback(category);
    });
  }

  factory.add = function(category, callback){
    console.log(category);
    $http.post('/addCategory', category)
    .then(function(data){
      callback(data);
    });
  }

  return factory;
}]);
