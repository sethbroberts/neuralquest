/**
 *
 * Element Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('ElementCtrl', ElementCtrl);

  function ElementCtrl ($firebaseArray, FirebaseUrl, $stateParams) {
    var elementControl = this;
    var track = $stateParams.trackName;
    var stepName = $stateParams.stepName;
    var courseName = $stateParams.courseName;
    var shuffleName = $stateParams.shuffleName;
    var ref = new Firebase(FirebaseUrl + '/' + track + '/' + stepName + '/' + courseName + '/Shuffle');

    elementControl.elements = $firebaseArray(ref);

    elementControl.elements.$loaded()
      .then(function() {
        //console.log(elementControl.elements);
      });

    // elementControl.saveShuffle = saveShuffle;

    /*=============================================
    =            METHOD IMPLEMENTATION            =
    =============================================*/

    // function saveShuffle (data) {
    //   var refWrite = new Firebase(FirebaseUrl + '/users/' + authData.uid + '/');
    //   refWrite.update({ posURL: resetThisVarName + missionName + '/shuffles/' + data });
    // };
  };

})();