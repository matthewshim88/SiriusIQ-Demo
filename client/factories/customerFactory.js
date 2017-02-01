app.factory('customerFactory', ["$http", function($http){
  var factory = {};

  factory.index = function(callback){
    $http.get('/customers/get')
    .then(function(returnCustomers){
      callback(returnCustomers.data);
    })
  }
  factory.add = function(customer, callback){
    $http.post('/addCustomer', customer)
    .then(function(data){
      callback(data);
    });
  }

  factory.remove = function(customerID, callback){
    $http.delete('/customers/' + customerID)
    .then(function(data){
      callback(data);
    });
  }

  return factory;
}])
