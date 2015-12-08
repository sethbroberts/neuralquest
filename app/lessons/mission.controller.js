/**
 *
 * Mission Template Controller
 *
 */

(function(){
  'use strict';

  angular.module('neuralquestApp')
    .controller('MissionCtrl', MissionCtrl);

    function MissionCtrl ($firebaseArray, FirebaseUrl) {
      var missionCtrl = this;
      var ref = new Firebase(FirebaseUrl + 'test2/steps/step1/courses/courseID1/missions/refName3/shuffles');

      missionCtrl.shuffles = $firebaseArray(ref);

      missionCtrl.shuffles.$loaded()
        .then(function() {
          console.log(missionCtrl.shuffles);
        })
      

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/
      function logLesson() {
        //todo: this is just for reference and can be removed
        console.log(missionCtrl.shuffles);
      }
      
    }

})();