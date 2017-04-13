myApp.controller('ConfirmedController', ['PizzaOvenService', function(PizzaOvenService){
var confirmed = this;

confirmed.pizzaObject = PizzaOvenService.pizzaObject;
confirmed.total = PizzaOvenService.total;

// a number accessible in this controller
confirmed.totalCost = 0;

// a function to a) call PizzaOvenService.total, and b) set confirmed.totalCost
confirmed.setTotal = function(pizzaObject) {
   var totalFromPizzaOvenServiceFunction = confirmed.total(pizzaObject);
   confirmed.totalCost = totalFromPizzaOvenServiceFunction;
};



}]);
