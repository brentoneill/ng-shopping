//Angular Shopping App -- ROUTES
(function () {
  "use strict";

  angular.module('angShopping', [
    'ngRoute',
    'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
      //STORE ROUTES
      .when('/', {
        templateUrl: 'views/store/storefront.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/store/cart.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/detail/:productId', {
        templateUrl: 'views/store/detailproduct.html',
        controller: 'MainController as mainCtrl'
      })
      //ADMIN ROUTES
      .when('/admin', {
        templateUrl: 'views/admin/adminlogin.html',
        controller: 'LoginController as loginCtrl'
      })
      .when('/products', {
        templateUrl: 'views/admin/producttable.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/addproduct', {
        templateUrl: 'views/admin/addproduct.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/edit/:productId', {
        templateUrl: 'views/admin/editproduct.html',
        controller: 'AdminController as adminCtrl'
      })
      .otherwise({
        redirectTo: '/not-found'
      })
  });
})();                        //IIFE - Immediately Invoked Function Execution
