app.factory('reviewFactory', ['$http', '$location', function($http, $location){
  var factory = {};

  // gets all reviews
  factory.index = function(callback){
    $http.get('/reviews/get')
    .then(function(returnReviews){
      callback(returnReviews.data);
    })
  }

  // adds a review
  factory.add = function(review, callback){
    $http.post('/addReview', review)
    .then(function(data){
      callback(data);
    });
  }

  // gets all reviews for one product
  factory.get = function(productID, callback){
    $http.get('/reviews/' + productID)
    .then(function(returnReviews){
      console.log(returnReviews.data);
      callback(returnReviews.data);
    })
  }


  return factory;
}]);
