// var myApp = angular.module('myApp', ['ngRoute']);'
myApp.controller('OrderController', ['PizzaOvenService', function(PizzaOvenService){
  console.log("inside OrderController");

  var order = this;

  var newPizza =  {
    size: '',
    toppings: []
  };

  var addPizza = PizzaOvenService.addPizza;

  var clearStuff = function() {
    for (var topping in order.toppings) {
      order.toppings[topping] = false;
    }
    order.size = '';
    return order.toppings;
  };

  var createToppingsArray = function(pizza) {
    console.log(pizza);
    var toppingsArray = [];

    for (var topping in pizza.toppings) {
      console.log("pizza.toppings", pizza.toppings);
      console.log("topping", topping);
      if (pizza.toppings[topping] === true) {
        toppingsArray.push(topping);
      }
    }

    console.log(toppingsArray);
    return toppingsArray;
  };

  order.addAndClear = function(order) {
    console.log(order);
    var toppingsArray = createToppingsArray(order);
    console.log(toppingsArray);
    // var pizzaCopy = angular.copy(order);
    var cost = function(pizza){
      switch (pizza.size) {
        case "small":
          return 6;
          case "medium":
          return 7;
          case "large":
          return 8;
      }
    };
    var pizza = {
      size : order.size,
      toppings : toppingsArray,
      cost: cost(order) + toppingsCalc(toppingsArray)
    };
    addPizza(pizza);
    clearStuff();
  };

  var toppingsCalc = function(toppings){
    var toppingCost = toppings.length;
  
    return toppingCost;
  };
}]);
