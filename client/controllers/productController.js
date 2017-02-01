app.controller('productController', ['$scope', '$routeParams', '$location', 'productFactory', 'categoryFactory', 'brandFactory', function($scope, $routeParams, $location, productFactory, categoryFactory, brandFactory){
  $scope.products = [];

  productFactory.index(function(returnedProduct){
    $scope.products = returnedProduct;
  });

  $scope.add = function(){
    // must add new Category and Brand with new product
    $scope.category = { category: $scope.product.category };
    $scope.brand = { brand: $scope.product.brand };

    categoryFactory.add($scope.category, function(category){
      console.log("Category Added");
    });

    brandFactory.add($scope.brand, function(brand){
      console.log("Brand Added");
    });

    productFactory.add($scope.product, function(product){
      $scope.products.push(product.data);

      //must call products to immediately render the page
      productFactory.index(function(returnedProduct){
        $scope.products = returnedProduct;
      });
      //clears field
      $scope.product = "";
    });
  }

}])
