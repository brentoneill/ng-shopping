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

      //Update product
      mainCtrl.editProduct = function (editedProduct){
        ProductsService.editAProduct(editedProduct);
      };

      //Delete producut
      mainCtrl.deleteProduct = function(product){
        ProductsService.deleteProduct(product);
      };

      //Routing stuff
      mainCtrl.login = function(username){
        if(username === 'brent'){
          $location.path('/products');
        };
      };

      mainCtrl.goToAddProduct = function(){
        $location.path('/addproduct');
      };

      mainCtrl.goBackToProducts = function(){
        $location.path('/products');
      };

      mainCtrl.goToLogin = function(){
        $location.path('/');
      }
    });
})();                        //IIFE
