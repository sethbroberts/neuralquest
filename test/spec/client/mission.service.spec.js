describe('Missions.service.spec', function () {
  var Missions;
  //Missions = {};


  beforeEach(module('neuralquestApp'));

  beforeEach(inject(function (_Missions_, _$firebaseArray_, _$firebaseObject_, _FirebaseUrl_,_$q_) {
      Missions = _Missions_;
      $firebaseArray = _$firebaseArray_;
      $firebaseObject = _$firebaseObject_;
      FirebaseUrl = _FirebaseUrl_;
      $q = _$q_;
    })
  );

  describe('Missions methods', function () {
    it('should have all needed methods', function () {
      expect(typeof Missions.getShuffleData).toBe('function');
      expect(typeof Missions.getLastElement).toBe('function');
    });
  });


  xdescribe('getShuffleData method unit test ', function () {
    it('getShuffleData should return a shuffle title', function(){
      //TODO - firebase related
    })
  });

  xdescribe('getLastElement method unit test ', function () {
    it('getLastElement should return the last element', function(){
      //TODO - firebase related
    })
  });
});

      beforeEach(inject(function (_Missions_, _$firebaseArray_, _$firebaseObject_, _FirebaseUrl_,_$q_) {
        
        Missions = _Missions_;
        $firebaseArray = _$firebaseArray_;
        $firebaseObject = _$firebaseObject_;
        FirebaseUrl = _FirebaseUrl_;
        $q = _$q_;
      })
      );

  describe('Missions object', function () {
    it('Missions should exist', function () {
      assert.isNotNull(Missions, 'Missions is connected')
    });
 
    it('FirebaseUrl should be a string', function () {
      assert.isString(FirebaseUrl, 'firebaseUrlis a string')
      });

    it('getShuffleData is a function', function(){
      assert.isFunction(Missions.getShuffleData, 'getShuffleData is a function')
      });

    it('getShuffleData should return a shuffle title', function(){
      //TODO
    })

    it('getLastElement should return the last element', function(){
      //TODO
    })
  });