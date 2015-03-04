///////////////////////////////////////
//Main Store Controller
///////////////////////////////////////
(function(){

  "use strict";

  angular.module('angShopping')
    .controller('MainController', function (ProductsService, $scope, $location, $routeParams){


      var mainCtrl = this;
      ProductsService.getProducts().success(function(data){
        mainCtrl.products = data;
      });
      ProductsService.getProduct($routeParams.productId).success(function(data){
        mainCtrl.singleProduct = data;
      });


      mainCtrl.cart = ProductsService.getCart();
      mainCtrl.cartTotal = ProductsService.totalCartQuant();
      mainCtrl.cartCost = ProductsService.totalCartCost();


      /////////////////////////////////
      //CART FUNCTIONS
      /////////////////////////////////
      mainCtrl.addProductToCart = function(product){
        ProductsService.addToCart(product);
        mainCtrl.cart = ProductsService.getCart();
        mainCtrl.cartTotal = ProductsService.totalCartQuant();
        mainCtrl.cartCost = ProductsService.totalCartCost();
      };
      mainCtrl.removeFromCart = function(product){
        ProductsService.removeFromCart(product);
        mainCtrl.cartTotal = ProductsService.totalCartQuant();
        mainCtrl.cartCost = ProductsService.totalCartCost();
      };
      mainCtrl.getItemTotal = function(q,p){
        var total = q * p;
        return round(total, 2);
        mainCtrl.cartTotal = ProductsService.totalCartQuant();
        mainCtrl.cartCost = ProductsService.totalCartCost();
      };
      /////////////////////////////////
      /////////////////////////////////



      /////////////////////////////////
      //SINGLE PRODUCT FUNCTIONS
      /////////////////////////////////
      mainCtrl.submitComment = function(product, comment){
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
      mainCtrl.goToProductDetail = function(id){
        $location.path('/detail/' + id)
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
      /////////////////////////////////
      /////////////////////////////////




    });
})();
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////







///////////////////////////////////////
//Admin Controller
///////////////////////////////////////
(function(){

  "use strict";

  angular.module('angShopping')
    .controller('AdminController', function (ProductsService, UserService, $scope, $location, $routeParams){

      var adminCtrl = this;
      ProductsService.getProducts().success(function(data){
        adminCtrl.products = data;
      });

      ProductsService.getProduct($routeParams.productId).success(function(data){
        adminCtrl.singleProduct = data;
      });

      adminCtrl.username = UserService.getUser();


      /////////////////////////////////
      //ADMIN FUNCTIONS
      /////////////////////////////////
      //C - Add product
      adminCtrl.addNewProduct = function (newProduct){
        if(newProduct === undefined){
          //nothing
        }
        else {
          ProductsService.addNewProduct(newProduct);       //Tells the servcice to add a new product
          $location.path('/products');
        }
      };

      //U - Edit Product
      adminCtrl.submitEdit = function (product) {
        $location.path('/products');
        ProductsService.editProduct(product, product._id);
        console.log('submitting edit');
      }

      //D - Delete producut
      adminCtrl.deleteProduct = function(id){
        ProductsService.deleteProduct(id);
      };
      /////////////////////////////////
      /////////////////////////////////

      // $scope.$on('product:deleted', function(){
      //   ProductsService.getProducts().success(function(data){
      //     adminCtrl.products = data;
      //   });
      // });

      /////////////////////////////////
      //ROUTING
      /////////////////////////////////
      adminCtrl.goToAddProduct = function(){
        $location.path('/addproduct');
      };
      adminCtrl.goToProducts = function(){
        $location.path('/products');
      };
      adminCtrl.goToLogin = function(){
        $location.path('/admin');
      };
      adminCtrl.goToEditProduct = function (id){
        $location.path('/edit/' + id);
      };
      /////////////////////////////////
      /////////////////////////////////
    });
})();
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////



///////////////////////////////////////
//Login Controller
///////////////////////////////////////
(function(){

  "use strict";

  angular.module('angShopping')
    .controller('LoginController', function (UserService, $location) {

      var loginCtrl = this;

      loginCtrl.goToStorefront = function(){
        $location.path('/');
      };

      loginCtrl.login = function(username){
        if(username === 'brent'){
          UserService.setUser(username);
          $location.path('/products');
        };
      };

    });
})();
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
