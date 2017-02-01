var app = angular.module("eStoreApp", ["ngRoute", "angular-humanize"]);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix(''); // angular 1.6 defaults to '#!' - needed this to clear
  $routeProvider
  .when("/", {
    templateUrl: "/partials/main.html",
    controller: "productController"
  })
  .when("/newProduct", {
    templateUrl: "/partials/newProduct.html",
    controller: "productController"
  })
  .when("/product/filter/:id", {
    templateUrl: "/partials/productFilterCategory.html",
    controller: "filterCategory"
  })
  .when("/product/filter/brand/:id", {
    templateUrl: "/partials/productFilterBrand.html",
    controller: "filterBrand"
  })
  .when("/product/:id", {
    templateUrl: "/partials/detail.html",
    controller: "detailController"
  })
  .when("/newReview/:id", {
    templateUrl: "partials/review.html",
    controller: "reviewController"
  })
  .when("/reviews", {
    templateUrl: "partials/reviewDisplay.html",
    controller: "reviewController"
  })
  .when("/categories", {
    templateUrl: "/partials/categories.html",
    controller: "categoryController"
  })
  .when("/brands", {
    templateUrl: "/partials/brands.html",
    controller: "brandController"
  })
  .when("/customers", {
    templateUrl: "/partials/customer.html",
    controller: "customerController"
  })
  .when("/orders", {
    templateUrl: "/partials/orders.html",
    controller: "orderController"
  })
  .otherwise({
    redirectTo: '/'
  })
})

.filter('range', function(){
  return function(n){
    var res = [];
    for(var i = 1; i < n; i++){
      res.push(i);
    }
    return res;
  };
});
