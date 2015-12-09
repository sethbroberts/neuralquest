(function() {
    'use strict';

  angular
    .module('neuralquestApp')
    .controller('AccordionCtrl', AccordionCtrl);

  /* @ngInject */
  function AccordionCtrl() {
    var accordionCtrl = this;

    accordionCtrl.oneAtATime = true;

    accordionCtrl.aContent = [
      {
        title: 'Introduction',
        content: 'What is a neural network?'
      },
      {
        title: 'Prerequisites',
        content: 'Curiosity, algebra and, for the later modules, intermediate javascript'
      },
      {
        title: 'Roadmap/Overview',
        content: 'There are many educational resources on neural networks, but most are densely packed with mathematical equations'
      },
      {
        title: 'What are neural networks used for?',
        content: 'Neural networks can be used for many tasks'
      }
    ];

    accordionCtrl.status = {
      
      isFirstOpen: true,
      isFirstDisabled: false
    };

  }
})();