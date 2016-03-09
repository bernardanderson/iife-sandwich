// This SandwichMaker IIFE augments the original one
var SandwichMaker = function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices =
  {
    "bleu": 2.50,
    "cheddar": 1.50,
    "nocheese": 0.00
  };

  // Augment the original object with another method
  maker.addCheese = function(chosenCheese) {
    
    return cheesePrices[chosenCheese];
  }

  maker.getCheese = function() {
    return cheesePrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;

}(SandwichMaker || {});