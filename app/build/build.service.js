(function() {
  'use strict';

  angular
    .module('neuralquestApp')
    .factory('Build', ['$localStorage', 'FirebaseUrl', '$q', 'toaster',Build]);

  /* @ngInject */
  function Build($localStorage, FirebaseUrl, $q, toaster) {
    var ref = new Firebase(FirebaseUrl+'NNFlat');

    var service = {
        setBuildMode: setBuildMode,
        getBuildMode: getBuildMode,
        updateBuild: updateBuild,
        getElementonDB: getElementonDB
    };
    return service;

    ////////////////

    function setBuildMode(buildMode) {
      $localStorage.isBuildMode = !$localStorage.isBuildMode;
    }

    function getBuildMode() {
      return $localStorage.isBuildMode;
    }

    function updateBuild(content) {
      console.log("issertbuild fired");
      toaster.pop('success', 'the content has been successfully submitted', "");
      ref.child(content.sequence).update(content);
      //ref.save();
    }

    function getElementonDB(sequenceNum){
      var defer = $q.defer();
      var eleRef = ref.child(sequenceNum);

      eleRef.on("value", function(snapshot) {
        console.log(snapshot.val());
        var element = snapshot.val();
        defer.resolve(element);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
      return defer.promise;
    };

  }
})();