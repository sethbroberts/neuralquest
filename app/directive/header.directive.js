(function() {
    'use strict';

    angular
        .module('neuralquestApp')
        .directive('appHeader', appHeader);

    appHeader.$inject = ['Users'];

    /* @ngInject */
    function appHeader(Users) {
        // Usage: header directive. it will know if use is logged in or not and show the appropriate header at the top.
        // don't forget to add directive in the template
        // e.g. <app-header></app-header> or <div app-header></div>

        var appHeader = {
            // bindToController: true,
            controller: Controller,
            // controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            templateUrl: 'directive/header.directive.html',
            scope: {
            }
        };
        return appHeader;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function Controller($scope, Users) {
      // $scope.currentUser = 

      $scope.isUsreSignedIn = isUsreSignedIn;
      $scope.$on('evt_userSiningIn', function(){
        console.log('checking curerntUser after the event is triggered:',Users.currentUser);
        isUsreSignedIn();
      })

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/
      
      function isUsreSignedIn() {
        console.log('checking curerntUser in the directive:',Users.currentUser);
        if(Users.currentUser){
          return true;
        } else {
          return false;
        }
      }
      
    }
})();