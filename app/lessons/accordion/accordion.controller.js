(function() {
    'use strict';

  angular
    .module('neuralquestApp')
    .controller('AccordionCtrl', AccordionCtrl);

  
  function AccordionCtrl(FirebaseUrl, $firebaseObject, $firebaseArray, accordionData, Users, Auth) {
    var accordionCtrl = this;
    var getLessons = getLessons;

    accordionCtrl.oneAtATime = true;

    accordionCtrl.init = init;
    accordionCtrl.init();
    accordionCtrl.isNotString = isNotString;
    accordionCtrl.openFirstOne = openFirstOne;

    /*======================================
    =            IMPLEMENTATION            =
    ======================================*/

    function init() {
      accordionCtrl.allEl = accordionData;
      // console.log(accordionData);
      // console.log('accordion',accordionCtrl.allEl);
      accordionCtrl.track = makeLocalObject(accordionCtrl.allEl);
      console.log(Auth.$getAuth());
      console.log(Users.getProfile(Auth.$getAuth().uid));
      accordionCtrl.currentUser = Users.getProfile(Auth.$getAuth().uid);
      // MY EDITS
      accordionCtrl.currentUser.$loaded().then(function() {
        var currSeq = accordionCtrl.currentUser.currentSequence;
        var ref = new Firebase(FirebaseUrl + '/NNFlat');
        ref.orderByChild('sequence')
          .equalTo(currSeq)
          .limitToFirst(1)
          .on('value', function(snapshot) {
            var data = snapshot.val();

            accordionCtrl.currentUser.currentLesson = data[currSeq].course;

          });
      });
      // END OF MY EDITS
    }

    function openFirstOne(index) {
      console.log('index:', index);
      if(index === 0){
        return true;
      } else {
        return false;
      }
    }

    //get a list of step, course or shuffle.
    function getComponent(allElements, targetKey){ 
      var result = {};
      for(var key in allElements){
        if(!allElements[key][targetKey]){
          result[allElements[key][targetKey]] = true;
        }
      }
      console.log("result,",result);
      return result;
    }

    function makeLocalObject(allElements) {
      var result = {}
      for(var numberKey in allElements) {
        var element = allElements[numberKey];
        var step = element['step'];
        var course = element['course'];
        var shuffle = element['shuffle'];
        
        if(!result[step]) {
          result[step] = {}
        }
        if(!result[step][course]) {
          result[step][course] = {}
        }
        if(!result[step][course][shuffle]) {
          result[step][course][shuffle] = {}
        }
        result[step][course][shuffle][element] = true; 
        
      }
      // console.log("result from makeLocalObject,",result);
      return result;
    }

    function isNotString(val) {
      if(typeof val === "string"){
        console.log('is string', val);
        return false;
      } else {
        return true;
      }
    }
  }
})();