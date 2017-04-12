var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/order', {
      templateUrl: 'views/templates/order.html',
      controller: 'OrderController',
      controllerAs: 'order'
    })
    .when('/cart', {
      templateUrl: 'views/templates/cart.html',
      controller: 'CartController',
      controllerAs: 'cart'
    })
    .when('/confirmed', {
      templateUrl: 'views/templates/confirmed.html',
      controller: 'ConfirmedController',
      controllerAs: 'confirmed'
    })
    .otherwise({
      redirectTo: 'order'
    });
}]);
