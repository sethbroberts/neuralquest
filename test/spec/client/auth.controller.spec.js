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
      expect(typeof AuthCtrl.login).toBe("function");
    });
    it('should have register Method', function () {
      expect(typeof AuthCtrl.register).toBe("function");
    });
    it('should have loginWithFacebook Method', function () {
      expect(typeof AuthCtrl.loginWithFacebook).toBe("function");
    });
    it('should have loginWithGoogle Method', function () {
      expect(typeof AuthCtrl.loginWithGoogle).toBe("function");
    });
    it('should have loginBtnToggle Method', function () {
      expect(typeof AuthCtrl.loginBtnToggle).toBe("function");
    });
    it('should have resetPwd Method', function () {
      expect(typeof AuthCtrl.resetPwd).toBe("function");
    });
  });
});
