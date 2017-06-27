var express = require("express");
var app = express();
var planetRouter = express.Router();


var planets = require('../client/src/models/planets.js')();
var Planet = require('../client/src/models/planet.js');
var PlanetaryData = require('../client/src/models/planetary_data.js');
var PlanetQuery = require("../db/planet_query.js");

var query = new PlanetQuery();

//INDEX
planetRouter.get("/", function(req, res) {
  query.all(function(planets) {
    res.json(planets);
  });
});
