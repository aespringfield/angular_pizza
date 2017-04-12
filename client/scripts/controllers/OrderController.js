// var myApp = angular.module('myApp', ['ngRoute']);'
myApp.controller('OrderController', [ function(){
  console.log("inside OrderController");

  var order = this;

  var newPizza =  {
    size: '',
    toppings: []
  };

  order.logPizza = function(pizza) {
    console.log(pizza);
  };


}]);
