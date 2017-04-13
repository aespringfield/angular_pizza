myApp.controller('ConfirmedController', ['PizzaOvenService', function(PizzaOvenService){
var confirmed = this;

confirmed.pizzaObject = PizzaOvenService.pizzaObject;
var total = PizzaOvenService.total;

// a number accessible in this controller
confirmed.totalCost = 0;

// a function to a) call PizzaOvenService.total, and b) set confirmed.totalCost
confirmed.setTotal = function(pizzaObject) {
   var totalFromPizzaOvenServiceFunction = total(pizzaObject);
   confirmed.totalCost = totalFromPizzaOvenServiceFunction;
};

confirmed.toppingsToString = function(toppings) {
  var toppingString;
  if (toppings.length === 0) {
    toppingString = "plain cheese, you boring son of a gun";
  } else if (toppings.length === 1) {
    toppingString = toppings[0];
  } else if (toppings.length === 2) {
    toppingString = toppings[0] + " and " + toppings[1];
  } else {
    toppingString = "and " + toppings[toppings.length-1];
    for (var i = 0; i < toppings.length - 1; i++) {
      toppingString = toppings[i] + ", " + toppingString;
    }
  }

  return toppingString;
};

confirmed.payNow = function() {
  alert("Thank you for your misplaced trust in our restaurant,\nbut please don't send us any money.");
};

}]);
