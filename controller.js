//Ang Shopping App controller

(function(){

  "use strict";

  angular.module('angShopping')
    .controller('MainController', function (ProductsService, $scope, $location){
      var mainCtrl = this;

      mainCtrl.products = ProductsService.getProducts();

      //Add product
      mainCtrl.addNewProduct = function (newProduct){
        if(newProduct === undefined){
          //nothing
        }
        else {
          ProductsService.addNewProduct(newProduct);       //Tells the servcice to add a new product
          $scope.newProduct = {};                          //Resets the product so more can be added
          $location.path('/products');
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
          $location.path('/products');
          mainCtrl.username = username;
          console.log(mainCtrl.username);
        };
      };

      mainCtrl.goToAddProduct = function(){
        $location.path('/addproduct');
      };

      mainCtrl.goBackToProducts = function(){
        $location.path('/products');
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
