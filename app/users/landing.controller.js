/**
 *
 * User Landing Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('LandingCtrl', LandingCtrl);

    function LandingCtrl (profile) {
      var landingCtrl = this;

      landingCtrl.profile = profile;
      landingCtrl.defaultName = "User";
      landingCtrl.logProfile = logProfile;
      

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/
      function logProfile() {
        //todo: this was just for reference and can be removed
        console.log(landingCtrl.profile);
      }
      
    }

})();