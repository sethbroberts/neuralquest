var aceService = (function () {
  var services = {};
  services.nqConsole = nqConsole();

  return services;

  /*=============================================
  =            METHOD IMPLEMENTATION            =
  =============================================*/

  function nqConsole() {
    return {
      log: function(msg) {
        consoleDiv = document.getElementById('result');
        para = document.createElement('p');
        text = document.createTextNode(msg);
        para.appendChild(text);
        consoleDiv.appendChild(para);
      },
      alert: function(msg) {
        consoleDiv = document.getElementById('result');
        alert = document.createElement('code');
        text = document.createTextNode(msg);
        alert.appendChild(text);
        consoleDiv.appendChild(alert);
      }
    }
  };

})()
