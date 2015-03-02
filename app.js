//Angular Shopping App -- ROUTES
(function () {
  "use strict";

  angular.module('angShopping', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/storefront.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/adminlogin.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/adminproducts.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/productstable', {
        templateUrl: 'views/adminproductstable.html',
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
