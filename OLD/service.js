/////////////////////////////////
//PRODUCT SERVICE
/////////////////////////////////
// (function () {
//   "use strict";
//   angular.module('angShopping')
//     .factory('ProductsService', function($location ,$http, $routeParams) {
//
//       var url = 'http://tiy-fee-rest.herokuapp.com/collections/crystalvis';
//
//       /////////////////////////////////
//       //ADMIN (backend) FUNCTIONS
//       /////////////////////////////////
//       var getSingleProduct = function(id){
//         return $http.get(url + '/' + id);
//       };
//
//       var getAllProducts = function () {
//         return $http.get(url);
//       };
//
//       var addProduct = function (product) {
//         product.comments = [];
//         $http.post(url, product).success(function(){
//           $location.path('/adminproducts');
//         });
//       };
//
//       var deleteProduct = function(id){
//         $http.delete(url + '/' + id)
//       };
//
//       var editAProduct = function(product, id) {
//         $http.put(url + '/' + id, product).success(function(){
//           $location.path('/adminproducts');
//         });
//       };
//       /////////////////////////////////
//       /////////////////////////////////
//
//
//       /////////////////////////////////
//       //PRODUCT (storefront) FUNCTIONS
//       /////////////////////////////////
//       var addComment = function(product, comment) {
//         comment = {
//           content: comment,
//           createdAt: _.now()
//         }
//         product.comments.push(comment);
//         $http.put(url + '/' + product._id, product);
//       };
//       var rateProduct = function(product, rating) {
//
//       };
//       /////////////////////////////////
//       /////////////////////////////////
//
//
//       /////////////////////////////////
//       //API
//       /////////////////////////////////
//       return {
//         //Admin
//         getProduct: getSingleProduct,
//         getProducts: getAllProducts,
//         addNewProduct: addProduct,
//         deleteProduct: deleteProduct,
//         editProduct: editAProduct,
//         //Storefront
//         addComment: addComment,
//         rateProduct: rateProduct
//       };
//       /////////////////////////////////
//       /////////////////////////////////
//
//     });
// })();
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////




/////////////////////////////////
//CART SERVICE
/////////////////////////////////
// (function () {
//   "use strict";
//   angular.module('angShopping')
//     .factory('CartService', function($location, $http) {
//
//       var cart = [];
//
//       /////////////////////////////////
//       //CART FUNCTIONS
//       /////////////////////////////////
//       var getCartProducts = function() {
//         return cart;
//       };
//
//       var totalCartQuant = function(){
//         var cartQuant = 0;
//         for( var i = 0; i < cart.length; i++) {
//           cartQuant += cart[i].quantity;
//         }
//         return cartQuant;
//       };
//
//       var totalCartCost = function(){
//         var cartCost = 0;
//         for( var i = 0; i < cart.length; i++ ){
//           cartCost += (cart[i].price * cart[i].quantity);
//         };
//         return round(cartCost, 2);
//       };
//
//       var addToCart = function(product) {
//         var alreadyInCart = _.where(cart, { name: product.name } );
//
//         if(alreadyInCart.length <= 0){
//           product.quantity = 1;
//           cart.push(product)
//         }
//         else{
//           var idx = cart.indexOf(alreadyInCart[0]);
//           cart[idx].quantity++;
//         }
//       };
//
//       var removeProduct = function(product){
//         var idx = cart.indexOf(product);
//         cart.splice(idx, 1);
//       };
//       /////////////////////////////////
//       /////////////////////////////////
//
//
//       /////////////////////////////////
//       //API
//       /////////////////////////////////
//       return{
//         //Cart
//         getCart: getCartProducts,
//         addToCart: addToCart,
//         removeFromCart: removeProduct,
//         totalCartQuant : totalCartQuant,
//         totalCartCost: totalCartCost
//       };
//       /////////////////////////////////
//       /////////////////////////////////
//     });
// })();
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////




/////////////////////////////////
//USER SERVICE
/////////////////////////////////
// (function () {
//   "use strict";
//   angular.module('angShopping')
//     .factory('UserService', function() {
//
//       var user = "";
//
//       var setUsername = function(userName){
//         user = userName;
//         console.log(user);
//       }
//       var getUsername = function(){
//         return user;
//       }
//
//
//       /////////////////////////////////
//       //API
//       /////////////////////////////////
//       return {
//         setUser: setUsername,
//         getUser: getUsername
//       }
//       /////////////////////////////////
//       /////////////////////////////////
//     });
// })();
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
