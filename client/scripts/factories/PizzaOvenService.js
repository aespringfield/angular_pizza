myApp.factory('PizzaOvenService', function() {
  var pizzaObject = {
    pizzasArray: [],
    confirmedArray: []
  };

var addPizza = function(pizza) {
  pizzaObject.pizzasArray.push(pizza);

  console.log(pizzaObject);
};

var deletePizza = function($index) {
  pizzaObject.pizzasArray.splice($index, 1);
};

var confirmPizza = function($index) {
  var pizza = pizzaObject.pizzasArray[$index];
  pizzaObject.confirmedArray.push(pizza);
  console.log(pizzaObject.confirmedArray);
  deletePizza($index);
};

var total = function(pizzaObject){
  for(var i = 0; confirmedArray.length; i++){
    var allTotal = pizzaObject.cost + allTotal;
    console.log(allTotal);
  }
};
  return {
    addPizza : addPizza,
    pizzaObject : pizzaObject,
    deletePizza : deletePizza,
    confirmPizza : confirmPizza,
    total : total
  };
});
