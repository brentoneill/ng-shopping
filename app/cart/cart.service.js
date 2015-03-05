
/////////////////////////////////
//CART SERVICE
/////////////////////////////////
(function () {
  "use strict";
  angular.module('angShopping')
    .factory('CartService', function($location, $http) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/crystalviscart';

      var cart = [];

      /////////////////////////////////
      //CART FUNCTIONS
      /////////////////////////////////
      var getCartProducts = function() {
        $http.get(url).success(function(data){

        });
      };

      var totalCartQuant = function(){
        var cartQuant = 0;
        for( var i = 0; i < cart.length; i++) {
          cartQuant += cart[i].quantity;
        }
        return cartQuant;
      };

      var totalCartCost = function(){
        var cartCost = 0;
        for( var i = 0; i < cart.length; i++ ){
          cartCost += (cart[i].price * cart[i].quantity);
        };
        return cartCost;
      };

      var addToCart = function(product) {
        var alreadyInCart = _.where(cart, { name: product.name } );

        if(alreadyInCart.length <= 0){
          product.quantity = 1;
          cart.push(product)
        }
        else{
          var idx = cart.indexOf(alreadyInCart[0]);
          cart[idx].quantity++;
        }
      };

      var removeProduct = function(product){
        var idx = cart.indexOf(product);
        cart.splice(idx, 1);
      };
      /////////////////////////////////
      /////////////////////////////////


      /////////////////////////////////
      //API
      /////////////////////////////////
      return{
        //Cart
        getCart: getCartProducts,
        addToCart: addToCart,
        removeFromCart: removeProduct,
        totalCartQuant : totalCartQuant,
        totalCartCost: totalCartCost
      };
      /////////////////////////////////
      /////////////////////////////////
    });
})();
