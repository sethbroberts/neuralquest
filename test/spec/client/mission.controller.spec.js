// 'use strict'

describe('Missions.controller.spec', function () {
  var MissionCtrl,Build,
      $scope = {};

  beforeEach(module('neuralquestApp'));
  
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $controller = $injector.get('$controller');

    MissionCtrl = $controller('MissionCtrl', {
      $scope: $scope,
      missionData: {},
      Build: {
        getBuildMode: function(){
          return true;
        }
      },
      auth: {
        uid: "12345"
      },
      lastEle: {},
      missionData: {
        val: function() {
          return {}
        }
      },
      Users: {
        getUserProfile: function(userID){
          return {
            isAdmin: true
          }
        }
      }
    })
  }));

  describe('MissionCtrl', function () {
    
    it('should have all necessary methods', function() {
      expect(MissionCtrl.processSnapshot).to.be.a('function');
      expect(MissionCtrl.saveElement).to.be.a('function');
      expect(MissionCtrl.isAdmin).to.be.a('function');
      expect(MissionCtrl.isBuildMode).to.be.a('function');
      expect(MissionCtrl.reset).to.be.a('function');
      expect(MissionCtrl.initEditor).to.be.a('function');
      expect(MissionCtrl.checkGate).to.be.a('function');
      expect(MissionCtrl.showCodeAnswer).to.be.a('function');
      expect(MissionCtrl.multipleChoiceChecker).to.be.a('function');
    })

  });
  describe('isAdmin unit test', function () {
    it('should return true for an admin user', function () {
      expect(MissionCtrl.isAdmin()).to.be.true;
    });
  });
  describe('isBuildMode unit test', function () {
    it('should return true or false', function () {
      var result = false;
      if(MissionCtrl.isBuildMode() === true || MissionCtrl.isBuildMode() === false){
        result = true;
      }
      expect(result).to.be.true;
    });
  });
  describe('processSnapshot unit test', function () {
    
  });
  describe('setNextShuffle unit test', function () {
    //firebase realted
  });
  describe('getSequence unit test', function () {
    //firebase related
  });
  describe('saveElement method unit test', function () {
    //firebase related
  });
});