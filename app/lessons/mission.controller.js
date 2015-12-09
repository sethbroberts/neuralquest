/**
 *
 * Mission Template Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('MissionCtrl', MissionCtrl);

  function MissionCtrl ($firebaseArray, FirebaseUrl, $stateParams) {
    var missionCtrl = this;
    // TODO: this needs to be dynamically built based on click/state from prior page
    var courseName = $stateParams.courseName;
    var resetThisVarName = 'NeuralNetwork/beginner/';
    var ref = new Firebase(FirebaseUrl + resetThisVarName + courseName);
    var authData = ref.getAuth();

    missionCtrl.shuffles = $firebaseArray(ref);

    missionCtrl.shuffles.$loaded()
      .then(function() {
        console.log(missionCtrl.shuffles);
      });

    missionCtrl.saveShuffle = saveShuffle;

    /*=============================================
    =            METHOD IMPLEMENTATION            =
    =============================================*/

    function saveShuffle (data) {
      var refWrite = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
      refWrite.update({ posURL: resetThisVarName + missionName + '/shuffles/' + data });
    };
  };

})();