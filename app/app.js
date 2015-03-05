//Angular Shopping App -- ROUTES
(function () {
  "use strict";

  angular.module('angShopping', [
    'ngRoute',
    'ngAnimate',
    'login',
    'admin',
    'cart'
  ])
  .config(function($routeProvider){
    $routeProvider
      //STORE ROUTES
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'MainController as mainCtrl'
      })
      .otherwise({
        redirectTo: '/not-found'
      })
  });
})();                        //IIFE - Immediately Invoked Function Execution
