var express = require("express");
var planetRouter = express.Router();
var Planet = require("../client/src/models/planet.js");

var PlanetQuery = require("../db/planet_query.js");
var query = new PlanetQuery();

//INDEX
planetRouter.get("/", function(req, res) {
  query.all(function(planets) {
    res.json(planets);
  });
});

module.exports = planetRouter;
