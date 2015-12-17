





  
  
      expect(typeof AuthCtrl.login).toBe("function");
      expect(typeof AuthCtrl.loginBtnToggle).toBe("function");
      expect(typeof AuthCtrl.loginWithFacebook).toBe("function");
      expect(typeof AuthCtrl.loginWithGoogle).toBe("function");
      expect(typeof AuthCtrl.register).toBe("function");
      expect(typeof AuthCtrl.resetPwd).toBe("function");
    $controller = _$controller_;
    //come up with methods unit test here
    AuthCtrl = $controller('AuthCtrl', {$scope: $scope});
    it('should have login Method', function () {
    it('should have loginBtnToggle Method', function () {
    it('should have loginWithFacebook Method', function () {
    it('should have loginWithGoogle Method', function () {
    it('should have register Method', function () {
    it('should have resetPwd Method', function () {
    var $scope = {};
    });
    });
    });
    });
    });
    });
  beforeEach(inject(function (_$controller_){
  beforeEach(module('neuralquestApp'));
  describe('Authctrl methods', function () {
  describe('method unit tests', function () {
  var $controller, AuthCtrl;
  }));
  });
  

