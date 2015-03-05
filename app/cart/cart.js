(function(){

  "use strict";

  angular.module('angShopping')
    .controller('CartController', function (CartService, ProductsService, $scope, $location, $routeParams){


    var cartCtrl = this;
    ProductsService.getProducts().success(function(data){
      cartCtrl.products = data;
    });
    ProductsService.getProduct($routeParams.productId).success(function(data){
      cartCtrl.singleProduct = data;
    });


    cartCtrl.cart = CartService.getCart();
    cartCtrl.cartTotal = CartService.totalCartQuant();
    cartCtrl.cartCost = CartService.totalCartCost();


    /////////////////////////////////
    //CART FUNCTIONS
    /////////////////////////////////
    cartCtrl.addProductToCart = function(product){
      CartService.addToCart(product);
      cartCtrl.cart = CartService.getCart();
      cartCtrl.cartTotal = CartService.totalCartQuant();
      cartCtrl.cartCost = CartService.totalCartCost();
    };
    cartCtrl.removeFromCart = function(product){
      CartService.removeFromCart(product);
      cartCtrl.cartTotal = CartService.totalCartQuant();
      cartCtrl.cartCost = CartService.totalCartCost();
    };
    cartCtrl.getItemTotal = function(q,p){
      var total = q * p;
      cartCtrl.cartTotal = CartService.totalCartQuant();
      cartCtrl.cartCost = CartService.totalCartCost();
      return total;
    };
    /////////////////////////////////
    /////////////////////////////////



    /////////////////////////////////
    //SINGLE PRODUCT FUNCTIONS
    /////////////////////////////////
    cartCtrl.submitComment = function(product, comment){
      if(comment === ""){
        alert('You must enter a some text in your comment for it to be submitted');
      }
      else{
        ProductsService.addComment(product, comment);
      }
    };
    /////////////////////////////////
    /////////////////////////////////



    /////////////////////////////////
    //ROUTING
    /////////////////////////////////
    cartCtrl.goToProductDetail = function(id){
      $location.path('/detail/' + id)
    };
    cartCtrl.goToLogin = function(){
      $location.path('/admin');
    };
    cartCtrl.goToStorefront = function(){
      $location.path('/store');
    };
    cartCtrl.goToCart = function(){
      $location.path('/cart');
    };
    /////////////////////////////////
    /////////////////////////////////
  });
})();
