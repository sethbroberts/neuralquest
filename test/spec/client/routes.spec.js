// 'use strict'
// describe('Route states  ', function() {

//   var $rootScope, $state, $injector, myServiceMock, state = 'myState';

//   beforeEach(function() {

//     module('angularquestApp', function($provide) {
//       $provide.value('routes', myServiceMock = {});
//     });

//     inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
//       $rootScope = _$rootScope_;
//       $state = _$state_;
//       $injector = _$injector_;
//     })
//   });

//   it('should respond to URL', function() {
//     expect($state.href(state, { id: 1 })).toEqual('#/state/1');
//   });

//   it('should resolve data', function() {
//     myServiceMock.findAll = jasmine.createSpy('findAll').andReturn('findAll');

//     $state.go(state);
//     $rootScope.$digest();
//     expect($state.current.name).toBe(state);

//     // Call invoke to inject dependencies and run function
//     expect($injector.invoke($state.current.resolve.data)).toBe('findAll');
//   });
// });