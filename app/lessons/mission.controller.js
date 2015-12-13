/**
 *
 * Mission Template Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('MissionCtrl', MissionCtrl);

  function MissionCtrl ($firebaseArray, FirebaseUrl, $firebaseObject, Missions, missionData, $scope) {
    var missionCtrl = this;
    var ref = new Firebase(FirebaseUrl + '/NNFlat');
    var authData = ref.getAuth();

    processSnapshot(missionData);

    missionCtrl.processSnapshot = processSnapshot;
    missionCtrl.saveElement = saveElement;
    getSequence();

    /*=============================================
    =            METHOD IMPLEMENTATION            =
    =============================================*/
    function lesliesFunc(val) {
      console.log(val);
    };

    function saveElement(data) {
      var refWrite = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      data = data + 10;
      refWrite.update({ currentSequence: data });
    };

    function processSnapshot(snapshot) {
      missionCtrl.elements = snapshot.val();
      for(var elem in missionCtrl.elements) {
        missionCtrl.title = missionCtrl.elements[elem].shuffle;
        missionCtrl.sequence = missionCtrl.elements[elem].sequence;
      }
      setNextShuffle(missionCtrl.sequence);
    };

    function setNextShuffle(sequence) {
      var nextSeq = sequence + 10;
      ref.orderByChild('sequence').equalTo(nextSeq).on('value', function(snapshot) {
        var element = snapshot.val();
        if (element) {
          missionCtrl.nextShuffle = element[nextSeq].shuffle;
        }
      });
    };

    function getSequence (){
      var refRead = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      refRead.orderByChild('currentSequence').on('value', function(snapshot){
       $scope.currentSequence = snapshot.val().currentSequence

      });
    };

  };

})();