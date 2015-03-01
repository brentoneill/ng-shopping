//Angular Shopping App



(function () {
  "use strict";

  angular.module('angShopping', [
    'ngRoute'
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
