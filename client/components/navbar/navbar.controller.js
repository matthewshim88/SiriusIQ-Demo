'use strict';

angular.module('eStoreApp')
  .controller('NavbarCtrl', function ($scope, $rootScope, $window, $timeout) {
    $scope.menu = [{
      'title': 'Add a Product',
      'state': 'newProduct',
    }, {
        'title': 'Customers',
        'state': 'customers'
    }, {
      'title': 'Orders',
      'state': 'orders',
    }, {
      'title': 'Recent Reviews',
      'state': 'reviews',
    }, {
      'title': 'Categories',
      'state': 'categories',
    }, {
      'title' : 'Brands',
      'state' : 'brands'
    }];

    $scope.isCollapsed = true;

    $scope.search = function () {
      $rootScope.$broadcast('search:term', $scope.searchTerm);
    };

    // $scope.redirect = function () {
    //   $state.go('products');
    //   // timeout makes sure that it is invoked after any other event has been triggered.
    //   $timeout(function () {
    //     // focus on search box
    //     var searchBox = $window.document.getElementById('searchBox');
    //     if(searchBox){ searchBox.focus(); }
    //   });
    // };
  });
