describe('Users.service.spec', function () {
  var Users;
  var $location;
  beforeEach(module('neuralquestApp'));

  beforeEach(inject(function (_Users_,_$firebaseArray_, _$firebaseObject_, _FirebaseUrl_, _$location_,_$q_) {
    Users = _Users_;
    $firebaseArray = _$firebaseArray_;
    $firebaseObject = _$firebaseObject_;
    FirebaseUrl = _FirebaseUrl_;
    $location = _$location_;
    $q = _$q_;
  }));

  describe('text', function () {
    var uid = 'acee391d-cbfc-4c08-a565-e2ca8729ed8f';

    beforeEach(function(done) {
      var displayName = Users.getDisplayName(uid, function(){
        done();
      });
      console.log('displayName', displayName)
    });
      
      it('displayName', function(){
        assert.isObject(displayName);
      })
  });
});