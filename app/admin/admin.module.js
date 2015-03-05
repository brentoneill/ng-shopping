//Angular Shopping App -- ROUTES
(function () {
  "use strict";

  angular.module('admin', [
    'ngRoute',
    'ngAnimate',
  ])
    .config(function($routeProvider){
      $routeProvider
        .when('/adminproducts', {
          templateUrl: '/admin/admin.html',
          controller: 'AdminController as adminCtrl'
        })
        .when('/addproduct', {
          templateUrl: '/admin/addproduct.html',
          controller: 'AdminController as adminCtrl'
        })
        .when('/edit/:productId', {
          templateUrl: '/admin/editproduct.html',
          controller: 'AdminController as adminCtrl'
        })
    });
})();
