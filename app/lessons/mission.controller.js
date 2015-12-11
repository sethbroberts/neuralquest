/**
 *
 * Mission Template Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('MissionCtrl', MissionCtrl);

  function MissionCtrl ($firebaseArray, FirebaseUrl, $stateParams, $firebaseObject, Missions, missionData) {
    var missionCtrl = this;
    // TODO: this needs to be dynamically built based on click/state from prior page
    var track = $stateParams.trackName;
    var stepName = $stateParams.stepName;
    var courseName = $stateParams.courseName;
    var ref = new Firebase(FirebaseUrl + '/NNFlat');
    var authData = ref.getAuth();
    var targetShuffle = 'Perceptron use';
    missionCtrl.aceContent = "function test(input) {\n  console.log(input)\n};";

    processSnapshot(missionData);

    missionCtrl.processSnapshot = processSnapshot;
    missionCtrl.saveShuffle = saveShuffle;

    // Missions.getShuffleData(targetShuffle, processSnapshot);

    /*=============================================
    =            METHOD IMPLEMENTATION            =
    =============================================*/

    function saveShuffle (data) {
      var refWrite = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      refWrite.update({ currentSequence: data });
    };

    function processSnapshot(snapshot) {
      //console.log(snapshot.val());
      missionCtrl.elements = snapshot.val();
      for(var elem in missionCtrl.elements) {
        // console.log(missionCtrl.elements[elem]);
        missionCtrl.title = missionCtrl.elements[elem].shuffle;
        break;
      }
    };

  };

})();