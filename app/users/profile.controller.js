angular.module('neuralquestApp')
  .controller('ProfileCtrl', function($state, md5, auth, profile) {
    var profileCtrl = this;

    profileCtrl.profile = profile;

    profileCtrl.updateProfile = function() {
      profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
      profileCtrl.profile.$save();
      //todo: change this
      $state.go('temp');
    }
  })