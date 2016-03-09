// This SandwichMaker IIFE augments the original one
var SandwichMaker = function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices =
  {
    "mayo": 1.00,
    "mayostard": 1.50,
    "nomayo": 0.00
  };

  // Augment the original object with another method
  maker.addCondiments = function(chosenCondiment) {
    
    return condimentPrices[chosenCondiment];
  }

  maker.getCondiments = function() {
    return condimentPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;

}(SandwichMaker || {});