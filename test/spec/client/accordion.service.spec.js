MockFirebase.override();

describe('Accordion.service.spec', function () {
  var Accordion, $scope, $q;

  beforeEach(module('neuralquestApp'));

  beforeEach(
    inject(function (_$rootScope_,_AccordionService_, _FirebaseUrl_,_$q_) {
      Accordion = _AccordionService_;
      // FirebaseUrl = _FirebaseUrl_;
      $q = _$q_;
      $scope = _$rootScope_.$new();

      
      spyOn(Accordion, 'getLessons').and.callFake(function(){
        var defer = $q.defer();
        defer.resolve();
        return defer.promise;
      });
    })
  );

  describe('Accordion Service method check', function () {
    it('should have all needed methods', function () {
      expect(typeof Accordion.getLessons).toBe('function');
    });
  });

  describe('getLessons method unit test', function () {
    it('should return promise object', function () {

      var result;
      Accordion.getLessons().then(function(data){
        result = data;
        expect(result).toBeTruthy();
      });
    });


  });


});