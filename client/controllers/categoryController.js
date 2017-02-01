app.controller('categoryController', ['$scope', '$routeParams', '$location', 'categoryFactory', 'productFactory', function($scope, $routeParams, $location, categoryFactory, productFactory){

  $scope.index = function(){
    categoryFactory.index(function(returnCategories){
      $scope.categories= returnCategories;
    });
  }(); // immediate invoke

}])
