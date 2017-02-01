app.controller('brandController', ['$scope', '$routeParams', '$location', 'brandFactory', 'productFactory', function($scope, $routeParams, $location, brandFactory, productFactory){

  $scope.index = function(){
    brandFactory.index(function(returnBrands){
      $scope.brands = returnBrands;
    });
  }(); // immediate invoke
}])
