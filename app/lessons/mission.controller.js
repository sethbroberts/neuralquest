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
    var track = $stateParams.trackName;
    var stepName = $stateParams.stepName;
    var courseName = $stateParams.courseName;
    var ref = new Firebase(FirebaseUrl + '/' + track + '/' + stepName + '/' + courseName);
    var authData = ref.getAuth();

    missionCtrl.shuffles = $firebaseArray(ref);
    console.log(missionCtrl.shuffles)

    // ref.orderByChild('sequence').on('value', function(snapshot) {
    //   console.log(snapshot.val())
    //   missionCtrl.shuffles = snapshot.val();
    // });


    // missionCtrl.shuffles.$loaded()
    //   .then(function() {
    //     console.log(missionCtrl.shuffles);
    //   });

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