/**
 *
 * Mission Service
 *
 */

(function(){
  'use strict';

  angular
    .module('neuralquestApp')
    .factory('Missions', Missions);

    function Missions($firebaseArray, $firebaseObject, FirebaseUrl, $q){
      var ref = new Firebase(FirebaseUrl + '/NNFlat');

      var Mission = {};
      Mission.getShuffleData = getShuffleData;

      return Mission;

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/

      function getShuffleData(name) {
        var defer = $q.defer();
        ref.orderByChild("course").equalTo(name).on("value", function(data) {
          defer.resolve(data);
        });
        return defer.promise;
      };
    };

})();
