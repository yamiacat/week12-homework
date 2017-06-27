var MongoClient = require("mongodb").MongoClient;

var PlanetQuery = function() {
  this.url = "mongo://localhost:27017/kalibanwhisp";
}

PlanetQuery.prototype = {
  all: function(onQueryFinished) {
  MongoClient.connect(this.url, function(err, db){
    if(err) console.log("ERROR in PlanetQuery.all 1");
    var collection = db.collection("planets");
    collection.find().toArray(function(err, docs) {
      if(err) console.log("ERROR in PlanetQuery.all 2");
      onQueryFinished(docs);
    });
  }) ;
  }
}




module.exports = PlanetQuery;
