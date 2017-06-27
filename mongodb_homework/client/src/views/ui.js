//IGNORE

var Planets = require('../models/planets.js');

var UI = function(){
  var planets = new Planets();
  this.render(planets);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(li, review){
    this.appendText(li, planetary_data.comment, "Comment: ");
    this.appendText(li, planetary_data.rating, "Population: ");
    this.appendText(li, planetary_data.climate, "Climate: ");
  },

  render: function(planets) {
    var container = document.getElementById("planets");

    for(var film of planets) {
      var li = document.createElement("li");
      this.appendText(li, planet.name, "Planet: ");

      for(var data of planet.planetary_data){
        this.createReview(li, review);
      }
      container.appendChild(li);
    }
  }
}

module.exports = UI;
