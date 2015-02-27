//Angular Shopping App



(function () {
  "use strict";

  angular.module('angShopping', [
    'ngRoute'
  ])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/addproduct', {
        templateUrl: 'views/addproduct.html',
        controller: 'MainController as mainCtrl'
      })
      .otherwise({
        redirectTo: '/not-found'
      })
  });
})();                        //IIFE - Immediately Invoked Function Execution
