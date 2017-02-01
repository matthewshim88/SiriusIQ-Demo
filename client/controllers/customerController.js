app.controller('customerController', function($scope, $routeParams, customerFactory, $location){

  $scope.customers = [];
  $scope.id = $routeParams.id;

  customerFactory.index(function(returnedCustomers){
    $scope.customers = returnedCustomers;
  });

  $scope.add = function(){
    //Front End Validations
    for(var i = 0; i < $scope.customers.length; i++){
      if($scope.customer.name == $scope.customers[i].name){
        alert("Front End: Customer already exists");
        return;
      }
    }
    customerFactory.add($scope.customer, function(customer){
      console.log("Succesfully added: " + customer.data.customer.name);
      if(!customer.data.status){
        alert("Back End: Customer already exists");
        return;
      }
      $scope.customers.push(customer.data.customer);
      //clears the form field
      $scope.customer="";
    });
  }

  $scope.remove = function(){
    customerFactory.remove($scope.id, function(){
      $location.url('/customers');
    });
  }

})
