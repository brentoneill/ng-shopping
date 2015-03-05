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
      // .when('/store', {
      //   templateUrl: 'views/store/storefront.html',
      //   controller: 'CartController as cartCtrl'
      // })
      // .when('/cart', {
      //   templateUrl: 'views/store/cart.html',
      //   controller: 'CartController as cartCtrl'
      // })
      // .when('/detail/:productId', {
      //   templateUrl: 'views/store/detailproduct.html',
      //   controller: 'CartController as cartCtrl'
      // })
      //ADMIN ROUTES
      // .when('/admin', {
      //   templateUrl: 'views/admin/adminlogin.html',
      //   controller: 'LoginController as loginCtrl'
      // })
      // .when('/adminproducts', {
      //   templateUrl: 'views/admin/producttable.html',
      //   controller: 'AdminController as adminCtrl'
      // })
      // .when('/addproduct', {
      //   templateUrl: 'views/admin/addproduct.html',
      //   controller: 'AdminController as adminCtrl'
      // })
      // .when('/edit/:productId', {
      //   templateUrl: 'views/admin/editproduct.html',
      //   controller: 'AdminController as adminCtrl'
      // })
      .otherwise({
        redirectTo: '/not-found'
      })
  });
})();                        //IIFE - Immediately Invoked Function Execution
