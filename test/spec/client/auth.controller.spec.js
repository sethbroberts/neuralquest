/*=====================================================
=            unit test for app/auth/auth.controller.js            =
=====================================================*/

describe('auth.controller.spec', function () {
  var $controller, AuthCtrl;
  
  beforeEach(module('neuralquestApp'));

  beforeEach(inject(function (_$controller_){
    var $scope = {};
    $controller = _$controller_;
    AuthCtrl = $controller('AuthCtrl', {$scope: $scope});
  }));

  describe('Authctrl methods', function () {
    it('should have login Method', function () {
      expect(AuthCtrl.login).to.be.a("function");
    });
    it('should have register Method', function () {
      expect(AuthCtrl.register).to.be.a("function");
    });
    it('should have loginWithFacebook Method', function () {
      expect(AuthCtrl.loginWithFacebook).to.be.a("function");
    });
    it('should have loginWithGoogle Method', function () {
      expect(AuthCtrl.loginWithGoogle).to.be.a("function");
    });
    it('should have loginBtnToggle Method', function () {
      expect(AuthCtrl.loginBtnToggle).to.be.a("function");
    });
    it('should have resetPwd Method', function () {
      expect(AuthCtrl.resetPwd).to.be.a("function");
    });
  });

  describe('method unit tests', function () {
    //come up with methods unit test here
  });

  
});


