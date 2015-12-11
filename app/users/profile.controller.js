/**
 *
 * Profile Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('ProfileCtrl', ProfileCtrl);

    function ProfileCtrl ($state, md5, auth, profile) {
      var profileCtrl = this;

      profileCtrl.profile = profile;
      profileCtrl.updateProfile = updateProfile;

      if (auth.google) {
        profileCtrl.profile.displayName = auth.google.displayName;
      }
      if (auth.facebook) {
        profileCtrl.profile.displayName = auth.facebook.displayName;
      }

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/

      function updateProfile() {
        if(auth.google){
          profileCtrl.profile.$save();
          $state.go('accordion');
        }
        if(auth.facebook){
          profileCtrl.profile.$save();
          $state.go('accordion');
        }
        if(auth.password){
          profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
          profileCtrl.profile.$save();
          //todo: change this
          $state.go('accordion');
        }
      }
    }

})();

