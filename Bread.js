// This SandwichMaker IIFE augments the original one
var SandwichMaker = function(maker) {

  // Private variable to store the different meat prices
  var breadPrices =
  {
    "white": 0.50,
    "wholewheat": 0.75,
    "nobread": 0.00
  };

  // Augment the original object with another method
  maker.addBread = function(chosenBread) {
    
    return breadPrices[chosenBread];
  }

  maker.getBread = function() {
    return breadPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;

}(SandwichMaker || {});