// var myApp = angular.module('myApp', ['ngRoute']);'
myApp.controller('OrderController', ['PizzaOvenService', function(PizzaOvenService){
  console.log("inside OrderController");

  var order = this;

  var newPizza =  {
    size: '',
    toppings: []
  };

  order.addPizza = PizzaOvenService.addPizza;

}]);
