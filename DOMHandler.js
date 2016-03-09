// The location to send the total price into the DOM
var totalPriceTarget = document.getElementById("price-target");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Get references to the div elements that has all the topping options
var breadChooser = document.getElementById("breads");
var meatChooser = document.getElementById("meats");
var cheeseChooser = document.getElementById("cheeses");
var condimentChooser = document.getElementById("condiments");
var veggieChooser = document.getElementById("veggies");

// Add the topping to the SandwichMaker to increase the total price
function addToDOM(sentTotalPrice) {
  finalSandwichPrice = sentTotalPrice;
  totalPriceTarget.textContent = finalSandwichPrice.toFixed(2);
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

cheeseChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addCheese', changeEvent);
  addToDOM(currentTotalPrice);
});

condimentChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addCondiments', changeEvent);
  addToDOM(currentTotalPrice);
});

veggieChooser.addEventListener("change", function(changeEvent) {
  var currentTotalPrice = SandwichMaker.addTopping('addVeggies', changeEvent);
  addToDOM(currentTotalPrice);
});
