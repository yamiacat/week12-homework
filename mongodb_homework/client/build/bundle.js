/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//IGNORE

var Planets = __webpack_require__(4);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var UI = __webpack_require__(0);

var app = function(){
  new UI();
}

window.addEventListener('load', app);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Planet = function(options){
  this.name = options.name;
  this.imperial_holdings = options.imperial_holdings;
  this.type = options.type;

  this.planetary_data = options.planetary_data || [];
}

Planet.prototype = {
  addPlanetaryData: function(data){
    this.planetary_data.push(data)
  }
}

module.exports = Planet;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var PlanetaryData = function(options){
  this.comment = options.comment;
  this.population = options.population;
  this.climate = options.climate;
}

module.exports = PlanetaryData;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Planet = __webpack_require__(2);
var PlanetaryData = __webpack_require__(3);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map