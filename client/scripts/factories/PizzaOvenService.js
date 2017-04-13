myApp.factory('PizzaOvenService', function() {
  var pizzaObject = {
    pizzasArray: []
  };

var addPizza = function(pizza) {
  pizzaObject.pizzasArray.push(pizza);

  console.log(pizzaObject);
};

var deletePizza = function($index) {
  console.log($index);
  pizzaObject.pizzasArray.slice($index, 1);
};

  return {
    addPizza : addPizza,
    pizzaObject : pizzaObject,
    deletePizza : deletePizza
  };
});
