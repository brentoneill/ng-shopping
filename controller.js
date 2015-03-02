//Ang Shopping App controller

(function(){

  "use strict";

  angular.module('angShopping')
    .controller('MainController', function (ProductsService, $scope, $location){
      var mainCtrl = this;

      mainCtrl.newProduct = {};

      mainCtrl.products = ProductsService.getProducts();

      //Add product
      mainCtrl.addNewProduct = function (newProduct){
        if(newProduct === undefined){
          //nothing
        }
        else {
          ProductsService.addNewProduct(newProduct);       //Tells the servcice to add a new product
          $location.path('/productstable');
        }
      };

      //Edit Product
      mainCtrl.editProduct = function (editedProduct){
        console.log('editing a product');
        console.log(editedProduct);
      };

      //Delete producut
      mainCtrl.deleteProduct = function(product){
        ProductsService.deleteProduct(product);
      };

      //Routing stuff
      mainCtrl.login = function(username){
        if(username === 'brent'){
          $location.path('/productstable');
          mainCtrl.username = username;
          console.log(mainCtrl.username);
        };
      };

      mainCtrl.goToAddProduct = function(){
        $location.path('/addproduct');
      };

      mainCtrl.goToProducts = function(){
        $location.path('/productstable');
      };

      mainCtrl.goToLogin = function(){
        $location.path('/admin');
      };

      mainCtrl.goToStorefront = function(){
        $location.path('/');
      };

      mainCtrl.goToCart = function(){
        $location.path('/cart');
      };

    });
})();                        //IIFE
