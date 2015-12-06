/**
 *
 * Auth Service
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .factory('Auth', Auth);

    function Auth($firebaseAuth, FirebaseUrl) {
      var ref = new Firebase(FirebaseUrl);
      var auth = $firebaseAuth(ref);
      return auth;
    };
})();
