use kalibanwhisp;

db.planets.insert([
  {
    name: "Kaliban",
    imperial_holdings: ["Administratum", "Munitorium"],
    type: "Hive",
    planetary_data: [{
      comment: "Center of sub-sector governance for the Kaliban Whisp.",
      population: 56,
      climate: "Acid-wracked, destroyed ecology."}]
  },
  {
    name: "Low Flavus",
    imperial_holdings: ["PDF", "Ortega Combine"],
    type: "Agri",
    planetary_data: [{
      comment: "Bountiful agri world, population of subhumans used in labour force.",
      population: 1,
      climate: "High humidity, tropical."}]
  },
  {
    name: "Torsion Magna",
    imperial_holdings: ["Adeptus Mechanicus", "Battlefleet Pacificus"],
    type: "Forge",
    planetary_data: [{
      comment: "Machine Cult owned world resposible for the production of titan carapace segments.",
      population: 6,
      climate: "None."}]
  },
  {
    name: "Haliopophis",
    imperial_holdings: ["Minimal", "Adeptus Mechanicus"],
    type: "Resource",
    planetary_data: [{
      comment: "Only periodically suitable for exploitation of marine resources.",
      population: 0.01,
      climate: "Oceanic, with long cycle hurricane season."}]
  }
]);
