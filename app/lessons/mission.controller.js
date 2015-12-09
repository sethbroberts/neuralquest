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
    var missionName = $stateParams.missionName;
    var resetThisVarName = 'test2/steps/step1/courses/courseID1/missions/';
    var ref = new Firebase(FirebaseUrl + resetThisVarName + missionName + '/shuffles');
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