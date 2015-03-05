(function(){

  "use strict";
  ///////////////////////////////////////
  //Main Site Controller
  ///////////////////////////////////////
  angular.module('angShopping')
    .controller('MainController', function ($location){

      var mainCtrl = this;

      mainCtrl.goToStore = function(){
        $location.path('/store');
      };
  });
  /////////////////////////////////
  /////////////////////////////////


///////////////////////////////////////
//Store(product) Controller
///////////////////////////////////////
  // angular.module('angShopping')
  //   .controller('CartController', function (CartService, ProductsService, $scope, $location, $routeParams){
  //
  //
  //     var cartCtrl = this;
  //     ProductsService.getProducts().success(function(data){
  //       cartCtrl.products = data;
  //     });
  //     ProductsService.getProduct($routeParams.productId).success(function(data){
  //       cartCtrl.singleProduct = data;
  //     });
  //
  //
  //     cartCtrl.cart = CartService.getCart();
  //     cartCtrl.cartTotal = CartService.totalCartQuant();
  //     cartCtrl.cartCost = CartService.totalCartCost();
  //
  //
  //     /////////////////////////////////
  //     //CART FUNCTIONS
  //     /////////////////////////////////
  //     cartCtrl.addProductToCart = function(product){
  //       CartService.addToCart(product);
  //       cartCtrl.cart = CartService.getCart();
  //       cartCtrl.cartTotal = CartService.totalCartQuant();
  //       cartCtrl.cartCost = CartService.totalCartCost();
  //     };
  //     cartCtrl.removeFromCart = function(product){
  //       CartService.removeFromCart(product);
  //       cartCtrl.cartTotal = CartService.totalCartQuant();
  //       cartCtrl.cartCost = CartService.totalCartCost();
  //     };
  //     cartCtrl.getItemTotal = function(q,p){
  //       var total = q * p;
  //       cartCtrl.cartTotal = CartService.totalCartQuant();
  //       cartCtrl.cartCost = CartService.totalCartCost();
  //       return round(total, 2);
  //     };
  //     /////////////////////////////////
  //     /////////////////////////////////
  //
  //
  //
  //     /////////////////////////////////
  //     //SINGLE PRODUCT FUNCTIONS
  //     /////////////////////////////////
  //     cartCtrl.submitComment = function(product, comment){
  //       if(comment === ""){
  //         alert('You must enter a some text in your comment for it to be submitted');
  //       }
  //       else{
  //         ProductsService.addComment(product, comment);
  //       }
  //     };
  //     /////////////////////////////////
  //     /////////////////////////////////
  //
  //
  //
  //     /////////////////////////////////
  //     //ROUTING
  //     /////////////////////////////////
  //     cartCtrl.goToProductDetail = function(id){
  //       $location.path('/detail/' + id)
  //     };
  //     cartCtrl.goToLogin = function(){
  //       $location.path('/admin');
  //     };
  //     cartCtrl.goToStorefront = function(){
  //       $location.path('/store');
  //     };
  //     cartCtrl.goToCart = function(){
  //       $location.path('/cart');
  //     };
  //     /////////////////////////////////
  //     /////////////////////////////////
  //   });
///////////////////////////////////////
//Admin Controller
///////////////////////////////////////
  // angular.module('angShopping')
  //   .controller('AdminController', function (ProductsService, UserService, $scope, $location, $routeParams){
  //
  //     var adminCtrl = this;
  //     ProductsService.getProducts().success(function(data){
  //       adminCtrl.products = data;
  //     });
  //
  //     ProductsService.getProduct($routeParams.productId).success(function(data){
  //       adminCtrl.singleProduct = data;
  //     });
  //
  //     adminCtrl.username = UserService.getUser();
  //
  //
  //     /////////////////////////////////
  //     //ADMIN FUNCTIONS
  //     /////////////////////////////////
  //     //C - Add product
  //     adminCtrl.addNewProduct = function (newProduct){
  //       if(newProduct === undefined){
  //         alert('You must enter some data...');
  //       }
  //       else {
  //         ProductsService.addNewProduct(newProduct);       //Tells the servcice to add a new product
  //       }
  //     };
  //
  //     //U - Edit Product
  //     adminCtrl.submitEdit = function (product) {
  //       ProductsService.editProduct(product, product._id);
  //     }
  //
  //     //D - Delete producut
  //     adminCtrl.deleteProduct = function(id){
  //       ProductsService.deleteProduct(id);
  //     };
  //     /////////////////////////////////
  //     /////////////////////////////////
  //
  //
  //     /////////////////////////////////
  //     //ROUTING
  //     /////////////////////////////////
  //     adminCtrl.goToAddProduct = function(){
  //       $location.path('/addproduct');
  //     };
  //     adminCtrl.goToProducts = function(){
  //       $location.path('/adminproducts');
  //     };
  //     adminCtrl.goToLogin = function(){
  //       $location.path('/admin');
  //     };
  //     adminCtrl.goToEditProduct = function (id){
  //       $location.path('/edit/' + id);
  //     };
  //     /////////////////////////////////
  //     /////////////////////////////////
  //   });
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
})();
