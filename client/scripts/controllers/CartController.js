myApp.controller('CartController', ['PizzaOvenService', function(PizzaOvenService) {

  var cart = this;
  
  cart.pizzaObject = PizzaOvenService.pizzaObject;
}]);
