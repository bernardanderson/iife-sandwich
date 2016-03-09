// The location to send the total price into the DOM
var totalPriceTarget = document.getElementById("price-target");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Get references to the div elements that has all the topping options
var breadChooser = document.getElementById("breads");
var meatChooser = document.getElementById("meats");


function addToDOM(sentTotalPrice) {
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice = sentTotalPrice;
  totalPriceTarget.textContent = finalSandwichPrice;
}

// Listener Events
breadChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addBread', changeEvent);
  addToDOM(currentTotalPrice);
});

meatChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addMeat', changeEvent);
  addToDOM(currentTotalPrice);
});
