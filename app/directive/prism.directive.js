(function() {
  'use strict';

  angular
    .module('neuralquestApp')
    .directive('nqPrism', nqPrism);

  function nqPrism() {
    var directive = {
      restrict: 'E',
      template: '<pre><code ng-transclude></code></pre>',
      replace:true,
      transclude:true
    };
    return directive;

  }

})();