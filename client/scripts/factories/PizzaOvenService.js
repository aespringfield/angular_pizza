myApp.factory('PizzaOvenService', function() {
  var pizzaObject = {
    pizzasArray: []
  };

var addPizza = function(pizza) {
  pizzaObject.pizzasArray.push(pizza);

  console.log(pizzaObject);
};
  return {
    addPizza : addPizza,
    pizzaObject : pizzaObject
  };
});
