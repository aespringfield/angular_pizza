myApp.controller('CartController', ['PizzaOvenService', function(PizzaOvenService) {

  var cart = this;

  cart.pizzaObject = PizzaOvenService.pizzaObject;

  cart.createToppingsArray = function(pizza) {
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

  cart.deletePizza = PizzaOvenService.deletePizza;

}]);
