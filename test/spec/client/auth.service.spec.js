/*=====================================================
=            unit test for app/auth/auth.service.js            =
=====================================================*/

describe('auth.service.spec', function () {
  var Auth, FirebaseUrl, $firebaseAuth;
  
  MockFirebase.override();

  beforeEach(function() {
    module('neuralquestApp');  
  });

  beforeEach(inject(function ($injector) {
    FirebaseUrl = $injector.get('FirebaseUrl');
    Auth = $injector.get('Auth');
    $firebaseAuth = $injector.get('$firebaseAuth');
  }));

  describe('Auth.service methods check', function () {
    it('should have OAuthLogin Method', function () {
      expect(Auth.OAuthLogin).to.be.a("function");
    });

    it('should have validatePwd Method', function () {
      expect(Auth.validatePwd).to.be.a("function");
    });
  });

  describe('validatePwd method unit tests', function () {
    var simplePwd = "123";
    var lengthyPwd = "1234567"
    var goodPwd = "Uneed12#";

    it('should return false for a bad password', function () {
      expect(Auth.validatePwd(simplePwd)).to.be.false;
    });

    it('should return false for a lengthy but simple password', function () {
      expect(Auth.validatePwd(lengthyPwd)).to.be.false;
    });

    it('should return true for a good password', function () {
      expect(Auth.validatePwd(goodPwd)).to.be.true;
    });
  });
  
  describe('OAuthLogin method unit test', function () {
    it('should function okay', function () { //weak
      var ref = new Firebase(FirebaseUrl);
      var auth = $firebaseAuth(ref);
      expect(Auth.OAuthLogin('google')).to.be.okay;
    });
    

  });

  
});
