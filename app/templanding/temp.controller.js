angular.module('neuralquestApp')
  .controller('TempCtrl', function(Auth, $state) {
    var tempCtrl = this;

    tempCtrl.logout = function(){
      Auth.$unauth();
      $state.go('home');
    };

    tempCtrl.setProfile = function(){
      $state.go('profile');
    };
    
  });