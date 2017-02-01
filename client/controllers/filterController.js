app.controller('filterCategory', ['$scope', '$routeParams', '$location', 'productFactory', 'categoryFactory', function($scope, $routeParams, $location, productFactory, categoryFactory){
  $scope.products = [];
  $scope.category = $routeParams.id;

  $scope.filterCategory = function(){
    categoryFactory.get($scope.category, function(data){
      $scope.category = data;
      //fetches the category, then uses the category
      //to find the products
      $scope.getProducts($scope.category);
    })
  }(); //immediate invoke

  $scope.getProducts = function(category){
    productFactory.filterByCategory(category, function(returnProducts){
      $scope.products = returnProducts.data;
      console.log($scope.products);
    });
  }
}])

app.controller('filterBrand', ['$scope', '$routeParams', '$location', 'productFactory', 'brandFactory', function($scope, $routeParams, $location, productFactory, brandFactory){
  $scope.products = [];
  $scope.brand = $routeParams.id;

  $scope.filterCategory = function(){
    brandFactory.get($scope.brand, function(data){
      $scope.brand = data;
      //fetches the category, then uses the category
      //to find the products
      $scope.getProducts($scope.brand);
    })
  }(); //immediate invoke

  $scope.getProducts = function(brand){
    productFactory.filterByBrand(brand, function(returnProducts){
      $scope.products = returnProducts.data;
      console.log($scope.products);
    });
  }
}])
