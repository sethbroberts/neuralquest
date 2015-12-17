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

<<<<<<< 9505db7266e1997185ede3aff9b2f3236f123507
  xdescribe('text', function () {
=======
  describe('text', function () {
>>>>>>> Testing files for further work
    var uid = 'acee391d-cbfc-4c08-a565-e2ca8729ed8f';

    beforeEach(function(done) {
      var displayName = Users.getDisplayName(uid, function(){
<<<<<<< 9505db7266e1997185ede3aff9b2f3236f123507
=======
        done();
>>>>>>> Testing files for further work
      });
      console.log('displayName', displayName)
    });
      
      it('displayName', function(){
        assert.isObject(displayName);
      })
<<<<<<< 9505db7266e1997185ede3aff9b2f3236f123507
=======

    // xit('a', function(){
    //   usersRef.$loaded().then(function(){
    //     console.log('usersRef', usersRef.$value);
    //     assert.isObject(usersRef.$value);
    //   });
    // });
>>>>>>> Testing files for further work
>>>>>>> Testing files for further work
  });
});