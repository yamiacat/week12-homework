var express = require('express');
var router = express.Router();
var path = require('path');
var planetsController = require("./planets.js");

router.use('/api/planets', planetsController);


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about us!"});
})

module.exports = router;
