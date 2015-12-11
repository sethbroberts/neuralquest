/**
 *
 * Mission Template Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('MissionCtrl', MissionCtrl);

  function MissionCtrl ($firebaseArray, FirebaseUrl, $stateParams, $firebaseObject, Missions, missionData, $scope) {
    var missionCtrl = this;
    // TODO: this needs to be dynamically built based on click/state from prior page
    var track = $stateParams.trackName;
    var stepName = $stateParams.stepName;
    var courseName = $stateParams.courseName;
    var ref = new Firebase(FirebaseUrl + '/NNFlat');
    var authData = ref.getAuth();
    var targetShuffle = 'Perceptron use';
    missionCtrl.aceContent = "function test(input) {\n  console.log(input);\n}";

    processSnapshot(missionData);

    missionCtrl.processSnapshot = processSnapshot;
    missionCtrl.saveShuffle = saveShuffle;
    getSequence();

    // Missions.getShuffleData(targetShuffle, processSnapshot);

    /*=============================================
    =            METHOD IMPLEMENTATION            =
    =============================================*/

    function saveShuffle (data) {
      var refWrite = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      data = data + 10;
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

    function getSequence (){
      var refRead = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      refRead.orderByChild('currentSequence').on('value', function(snapshot){
       $scope.currentSequence = snapshot.val().currentSequence

       console.log("$scope", $scope.currentSequence)
      })
    };

  };

})();