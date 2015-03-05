(function () {
  "use strict";

  angular.module('cart', [
    'ngRoute',
    'ngAnimate',
  ])
  .config(function($routeProvider){
    $routeProvider
      .when('/cart', {
        templateUrl: '/cart/cart.html',
        controller: 'CartController as cartCtrl'
      })
      .when('/store', {
        templateUrl: '/cart/storefront.html',
        controller: 'CartController as cartCtrl'
      })
      .when('/detail/:productId', {
        templateUrl: '/cart/detailproduct.html',
        controller: 'CartController as cartCtrl'
      })
  });
})();
