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

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/

      function updateProfile() {
        profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
        profileCtrl.profile.$save();
        //todo: change this
        $state.go('temp');
      }
    }

})();

