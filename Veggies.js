// This SandwichMaker IIFE augments the original one
var SandwichMaker = function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices =
  {
    "blackolives": 1.25,
    "mayostard": 0.75,
    "noveggies": 0.00
  };

  // Augment the original object with another method
  maker.addVeggies = function(chosenVeggie) {
    
    return veggiePrices[chosenVeggie];
  }

  maker.getVeggies = function() {
    return veggiePrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;

}(SandwichMaker || {});