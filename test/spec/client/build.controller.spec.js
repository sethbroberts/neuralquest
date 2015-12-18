/*=====================================================
=            unit test for app/build/auth.controller.js            =
=====================================================*/

describe('build.controller.spec', function () {
  var $controller, BuildCtrl;
  var $scope, $rootScope, Build;

  beforeEach(module('neuralquestApp'));

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    Build = $injector.get('Build');
    $scope = $rootScope.$new();
    $controller = $injector.get('$controller');

    BuildCtrl = $controller('BuildCtrl', {
      $scope: $scope,
      Build: Build
    })
  }));

  describe('BuildCtrl methods', function () {
    it('should have submitEle Method', function () {
      expect(BuildCtrl.submitEle).to.be.a("function");
    });
  });

  xdescribe('BuildCtrl unit tests', function () {
    // var buildCtrl = {};
    // buildCtrl.build = "test";
    // buildCtrl.editMode = "editmode";
    // buildCtrl.eltoModify = "1"
    //come up with methods unit test here
    it('should initiate some properties', function () {
      // console.log(Build);  
      // BuildCtrl.submitEle();
      // console.log(buildCtrl.build);
    });
    
  });

  
});


