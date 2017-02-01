'use strict';

angular.module('eStoreApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E'
    };
  });
