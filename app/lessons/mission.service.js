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
      Mission.getLastElement = getLastElement;
      Mission.codeEditorApiCall = codeEditorApiCall;

      return Mission;

      /*=============================================
      =            METHOD IMPLEMENTATION            =
      =============================================*/

      function getShuffleData(name) {
        var defer = $q.defer();
        ref.orderByChild("shuffle").equalTo(name).on("value", function(data) {
          defer.resolve(data);
        });
        return defer.promise;
      };

      function getLastElement(){
        var defer = $q.defer();
        ref.orderByChild('sequence').limitToLast(1).on('value', function(snapshot){
          defer.resolve(snapshot.val());
        });

        return defer.promise;
      };

      function codeEditorApiCall(path, data) {
        var devUrl = 'http://localhost:1337/api/';
        var apiRoot = 'https://neuralquest.herokuapp.com/api/';

        $.post(devUrl + path, data, function( results ) {
          console.log(JSON.stringify(results));
          aceService.nqConsole.log(JSON.stringify(results));
        })
        .fail(function() {
          aceService.nqConsole.alert( "error" );
        });
      };

    };

})();
