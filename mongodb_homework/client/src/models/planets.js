var Planet = require('./planet.js');
var PlanetaryData = require('./planetary_data.js');

var Planets = function(){}

Planets.prototype = {
  makeRequest: function(url, onRequestComplete) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", function() {
      if(request.status !== 200) console.log("ERROR in makeRequest");
      var jsonString = request.responseText;
      var resultsData = JSON.parse(jsonString);
      onRequestComplete(resultsData);
    });
    request.send();
  }
}



module.exports = Planets;
