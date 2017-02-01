app.controller('reviewController', ['$scope', '$routeParams', '$location', 'reviewFactory', function($scope, $routeParams, $location, reviewFactory){
  $scope.reviews = [];
  $scope.productID = $routeParams.id;
  $scope.showReviews = false;

  $scope.index = function(){
    reviewFactory.index(function(returnReviews){
      $scope.reviews = returnReviews;
    });
  }

  $scope.getReviewOneProduct = function(){
    reviewFactory.get($scope.productID, function(reviews){
      console.log(reviews);
      $scope.reviews.push(reviews);
      console.log($scope.showReviews);
    })
  }

  $scope.add = function(){
    $scope.review._product_id = $routeParams.id;
    reviewFactory.add($scope.review, function(review){
      $scope.reviews.push(review.data);

      //clears field
      $scope.review = "";
    });
  }

}])
