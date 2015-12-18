/*=====================================================
=            unit test for app/build/build.service.js            =
=====================================================*/

describe('build.service.spec', function () {
  var Build, $localStorage, FirebaseUrl, $q;
  beforeEach(function() {
    module('neuralquestApp');
  });


  beforeEach(inject(function (_$localStorage_,_FirebaseUrl_,_$q_, _Build_) {    
    $localStorage = _$localStorage_;
    FirebaseUrl = _FirebaseUrl_;
    $q = _$q_;
    Build = _Build_;
  }));

  describe('Build.service methods check', function () {
    it('should have setBuildMode Method', function () {
      expect(Build.setBuildMode).to.be.a("function");
    });
    it('should have getBuildMode Method', function () {
      expect(Build.getBuildMode).to.be.a("function");
    });
    it('should have updateBuild Method', function () {
      expect(Build.updateBuild).to.be.a("function");
    });
    it('should have getElementonDB Method', function () {
      expect(Build.getElementonDB).to.be.a("function");
    });
  });

  describe('setBuildMode method unit tests', function () {
    it('should toggle isBuildMode when invoked', function () {
      $localStorage.isBuildMode = false;

      Build.setBuildMode();

      expect($localStorage.isBuildMode).to.be.true;  
    });

  });
  
  describe('getBuildMode method unit tests', function () {
    it('should return Boolean buildMode', function () {
      $localStorage.isBuildMode = false;

      expect(Build.getBuildMode()).to.be.false;  
    });

  });

  describe('updateBuild method unit tests', function () {
    //firebase related how?
  });

  describe('getElementonDB method unit tests', function () {
    //firebase related how?
  });
});