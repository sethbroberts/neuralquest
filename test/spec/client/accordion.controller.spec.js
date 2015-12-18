/*=====================================================
=            unit test for app/lessons/accordion/accordion.controller.js            =
=====================================================*/

describe('accordion.controller.spec', function () {
  MockFirebase.override();

  var ref = new Firebase(FirebaseUrl);

  var $controller, AccordionCtrl;
  var $scope, $rootScope, FirebaseUrl, $firebaseObject, $firebaseArray
  var Users, Auth;

  beforeEach(module('neuralquestApp'));

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();

    FirebaseUrl = $injector.get('FirebaseUrl');
    $firebaseObject = $injector.get('$firebaseObject');
    $firebaseArray = $injector.get('$firebaseArray');
    
    Users = $injector.get('Users');
    Auth = $injector.get('Auth');
    Auth.$getAuth = function() {
      return {
        uid: "1234567890"
      }
    }

    $controller = $injector.get('$controller');
    AccordionCtrl = $controller('AccordionCtrl', {
      $scope: $scope,
      accordionData: {}
    })
  }));

  describe('AccordionCtrl methods', function () {
    it('should have all required methods', function () {
      // expect(AccordionCtrl.openFirstOne).to.be.a("function");
      // expect(AccordionCtrl.updateUserPosition).to.be.a("function");
      // expect(AccordionCtrl.isNotString).to.be.a("function");

      expect(typeof AccordionCtrl.openFirstOne).toBe('function');
      expect(typeof AccordionCtrl.updateUserPosition).toBe('function');
      expect(typeof AccordionCtrl.isNotString).toBe('function');

    });
  });

  describe('isNotString unit tests', function () {
    it('should return true for not string type input', function () {
      var result = AccordionCtrl.isNotString(1);
      expect(result).toBe(true);
    });
    it('should return false for string type input', function () {
      var result = AccordionCtrl.isNotString('string');
      expect(result).toBe(false);
    });  
  });

  describe('makeLocalObject unit tests', function () {
    var allElements = {
      10: {
        course: "testcourse",
        sequence: 10,
        shuffle: "testshuffle",
        step: "step",
        title: "title",
        type: "image",
        url: "http://123.com"
      },
      20: {
        course: "testcourse",
        content: "blabla",
        sequence: 20,
        shuffle: "testshuffle",
        step: "step",
        title: "title",
        type: "text",
      }
    }
    it('should return a result of an object', function () {
      var result = AccordionCtrl.makeLocalObject(allElements);
      expect(typeof result).toEqual("object");
    });
    it('should have an object with expected properties', function () {
      var result = AccordionCtrl.makeLocalObject(allElements);
      expect(result.step.testcourse.testshuffle).toBeTruthy();
    });
  });
  
  describe('openFirstOne unit tests', function () {
    it('should return true for input 0', function () {
      expect(AccordionCtrl.openFirstOne(0)).toEqual(true);
    });
  });

  xdescribe('updateUserPosition unit tests', function () {
    //firebase involved.
  });

});


