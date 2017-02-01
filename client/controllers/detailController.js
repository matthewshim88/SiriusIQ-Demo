app.controller('detailController', function($scope, $routeParams, productFactory, reviewFactory, $location){

  $scope.productID = $routeParams.id;
  $scope.detailProduct;

  // gets details for one product
  $scope.index = function(){
    productFactory.getOne($scope.productID, function(product){
      $scope.detailProduct = product;
    })
  }(); // immediate invoke


})
