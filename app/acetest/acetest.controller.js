(function() {
  'use strict';

  angular
      .module('neuralquestApp')
      .controller('AceCtrl', ['$localStorage','$timeout', 'Ace', AceCtrl]);

  /* @ngInject */
  function AceCtrl($localStorage, $timeout, Ace) {
    var vm = this;
    var editor;

    vm.getValue = getValue;
    vm.reset = reset;
    vm.run = run;

    init();

    ////////////////

    function init() {
      initCodeEditor();
      trackCode();
      console.log('editor', editor)
    };

    function trackCode() {
      editor.on("change", function(posObj){
        $localStorage.codeObj = editor.getValue();
      });
    };

    function initCodeEditor() {
      editor = ace.edit("code-editor");
      editor.setTheme("ace/theme/monokai");
      editor.getSession().setMode("ace/mode/javascript");
      editor.setValue("//your code start here. \n");
    };

    function getValue() {
      console.log('getValue called');
      vm.result = $localStorage.codeObj;
      console.log(vm.result);
    };

    function reset() {
      editor.setValue("//your code start here. \n");
      editor.getSession().setUndoManager(new ace.UndoManager());
      $localStorage.codeObj = '';
    };

    function run() {
      //send it to the server
      var add = vm.result;
      console.log(add);
      if(add(2,3) === 5){
        alert("great you did it.")
      } else {
        alert('try again');
      }
      //wait for the response
      //give the result back to browser.
    }
  }
})();

 // The editor
  var editor = ace.edit("code-editor");
  editor.getSession().setMode("ace/mode/javascript");
  editor.setOptions({ tabSize: 2 });

//for every editor modification, update localstorage
  editor.on('change', function(data){
    localStorage.setItem(codeId, editor.getValue());
  });