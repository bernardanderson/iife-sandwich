// This SandwichMaker IIFE augments the original one
var SandwichMaker = function(maker) {

  // Private variable to store the different meat prices
  var meatPrices =
  {
    "turkey": 1.50,
    "beef": 1.00,
    "nomeat": 0.00
  };

  // Augment the original object with another method
  maker.addMeat = function(chosenMeat) {
    
    return meatPrices[chosenMeat];
  }

  maker.getMeat = function() {
    return meatPrices;
  }

  // Return the new, augmented object with the new method on it
  return maker;

}(SandwichMaker || {});