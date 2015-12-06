/**
 *
 * Auth Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl(Auth, $state) {
      var authCtrl = this;

      authCtrl.user = {
        email: '',
        password: ''
      };

      authCtrl.login = login;
      authCtrl.register = register;

      

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/

      function login() {
        Auth.$authWithPassword(authCtrl.user).then(function(auth) {
          //todo: change this
          $state.go('temp');
        }, function(error) {
          authCtrl.error = error;
        })
      };

      function register() {
        Auth.$createUser(authCtrl.user).then(function(auth) {
          authCtrl.login();
        }, function(error) {
          authCtrl.error = error;
        })
      };
  };
})();
