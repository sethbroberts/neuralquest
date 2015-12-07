/**
 *
 * User Service
 *
 */

(function(){
  'use strict';

  angular
    .module('neuralquestApp')
    .factory('Users', Users);


    function Users($firebaseArray, $firebaseObject, FirebaseUrl){
      var usersRef = new Firebase(FirebaseUrl+'users');
      var users = $firebaseArray(usersRef);

      var User = {};
      User.getProfile = getProfile;
      User.getDisplayName = getDisplayName;
      User.getGravatar = getGravatar;
      User.all = users;
      
      return User;


      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/
      
      function getProfile(uid) {
          return $firebaseObject(usersRef.child(uid));
      }
      function getDisplayName(uid) {
        return users.$getRecord(uid).displayName;
      }
      function getGravatar(uid) {
        return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
      }
    };

})();