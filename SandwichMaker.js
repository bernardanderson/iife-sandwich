var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(funcToCall, sentChangeEvent) {

      // Variable to hold topping that the user selects
      var selectedTopping = sentChangeEvent.target.value;

      // Variable to hold the topping price returned from the correct food
      var toppingPrice = SandwichMaker[funcToCall](selectedTopping);

      // Variable to hold whether the topping is (un)checked
      toppingChecked = sentChangeEvent.target.checked;

      if (!toppingChecked) {
      // Determine the price of the topping chosen (- if checked)
        toppingPrice = 0 - toppingPrice;
      };

      // Adds the topping price to the total meats 
      totalPrice += toppingPrice;

      return totalPrice;
    }
  };
  
})(SandwichMaker  || {});