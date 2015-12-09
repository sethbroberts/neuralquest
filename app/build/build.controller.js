(function() {
    'use strict';

    angular
        .module('neuralquestApp')
        .controller('BuildCtrl', BuildCtrl);

    /* @ngInject */
    function BuildCtrl() {
        var buildCtrl = this;
        buildCtrl.title = 'Build Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();