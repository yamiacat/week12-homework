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
