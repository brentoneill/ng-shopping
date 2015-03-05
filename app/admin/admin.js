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
          alert('You must enter some data...');
        }
        else {
          ProductsService.addNewProduct(newProduct);       //Tells the servcice to add a new product
        }
      };

      //U - Edit Product
      adminCtrl.submitEdit = function (product) {
        ProductsService.editProduct(product, product._id);
      }

      //D - Delete producut
      adminCtrl.deleteProduct = function(id){
        ProductsService.deleteProduct(id);
      };
      /////////////////////////////////
      /////////////////////////////////


      /////////////////////////////////
      //ROUTING
      /////////////////////////////////
      adminCtrl.goToAddProduct = function(){
        $location.path('/addproduct');
      };
      adminCtrl.goToProducts = function(){
        $location.path('/adminproducts');
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
