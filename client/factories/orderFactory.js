app.factory('orderFactory', ["$http", function($http){
  var factory = {};

  factory.index = function(callback){
    $http.get('/orders/get')
    .then(function(returnOrders){
      callback(returnOrders.data);
    });
  }

  factory.add = function(order, callback){
    $http.post("/orders/new", order)
    .then(function(orderData){
      callback(orderData.data);
    });
  }

  return factory;
}])
