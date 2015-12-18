describe('Accordion.service.spec', function () {
  var Accordion;

  beforeEach(module('neuralquestApp'));

  beforeEach(
    inject(function (_AccordionService_, _$firebaseArray_, _$firebaseObject_, _FirebaseUrl_,_$q_) {
    
      Accordion = _AccordionService_;
      $firebaseArray = _$firebaseArray_;
      $firebaseObject = _$firebaseObject_;
      FirebaseUrl = _FirebaseUrl_;
      $q = _$q_;
    })
  );

  describe('Accordion object', function () {
    it('Accordion should exist', function () {
      assert.isObject(Accordion, 'Accordion is an object')
    });

    it('getLessons is a function', function(){
      assert.isFunction(Accordion.getLessons, 'getLessons is a function')
      });

    it('calling getLesson should return firebase elements',function(){
      //TODO: firebase related.
    })

  });
});