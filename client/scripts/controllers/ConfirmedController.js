myApp.controller('ConfirmedController', ['PizzaOvenService', function(PizzaOvenService){
var confirmed = this;


confirmed.pizzaObject = PizzaOvenService.pizzaObject;
confirmed.total = PizzaOvenService.total;




}]);
