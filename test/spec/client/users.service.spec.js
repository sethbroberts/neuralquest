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

  describe('Users service method check', function () {
    it('should have all needed methods', function () {
      expect(Users.getProfile).to.be.a('function');
      expect(Users.getDisplayName).to.be.a('function');
      expect(Users.getUserProfile).to.be.a('function');
      expect(Users.getGravatar).to.be.a('function');
    });
  });
});