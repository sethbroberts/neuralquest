(function() {
    'use strict';

  angular
    .module('neuralquestApp')
    .controller('AccordionCtrl', AccordionCtrl);

  
  function AccordionCtrl(FirebaseUrl, $firebaseObject, $firebaseArray) {
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
      getLessons('Track');
    }

    function openFirstOne(index) {
      console.log('index:', index);
      if(index === 0){
        return true;
      } else {
        return false;
      }
    }

    function getLessons(lesson) {
      var ref = new Firebase(FirebaseUrl);
      accordionCtrl.track = $firebaseObject(ref.child(lesson));
    }

    function isNotString(val) {
      // console.log('val', val);
      if(typeof val === "string"){
        console.log('is string', val);
        // console.log('is string', val);
        return false;
      } else {
        return true;
      }
    }

  }
})();