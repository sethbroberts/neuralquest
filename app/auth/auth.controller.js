angular.module('neuralquestApp')
  .controller('AuthCtrl', function(Auth, $state) {
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };

    authCtrl.login = function() {
      Auth.$authWithPassword(authCtrl.user).then(function(auth) {
        //todo: change this
        $state.go('temp');
      }, function(error) {
        authCtrl.error = error;
      })
    };

    authCtrl.register = function() {
      Auth.$createUser(authCtrl.user).then(function(auth) {
        authCtrl.login();
      }, function(error) {
        authCtrl.error = error;
      })
    };

  });