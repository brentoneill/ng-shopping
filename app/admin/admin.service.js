/////////////////////////////////
//PRODUCT (admin) SERVICE
/////////////////////////////////
(function () {
  "use strict";
  angular.module('angShopping')
    .factory('ProductsService', function($location ,$http, $routeParams) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/crystalvis';

      /////////////////////////////////
      //ADMIN (backend) FUNCTIONS
      /////////////////////////////////
      var getSingleProduct = function(id){
        return $http.get(url + '/' + id);
      };

      var getAllProducts = function () {
        return $http.get(url);
      };

      var addProduct = function (product) {
        product.comments = [];
        $http.post(url, product).success(function(){
          $location.path('/adminproducts');
        });
      };

      var deleteProduct = function(id){
        $http.delete(url + '/' + id)
      };

      var editAProduct = function(product, id) {
        $http.put(url + '/' + id, product).success(function(){
          $location.path('/adminproducts');
        });
      };
      /////////////////////////////////
      /////////////////////////////////


      /////////////////////////////////
      //PRODUCT (storefront) FUNCTIONS
      /////////////////////////////////
      var addComment = function(product, comment) {
        comment = {
          content: comment,
          createdAt: _.now()
        }
        product.comments.push(comment);
        $http.put(url + '/' + product._id, product);
      };
      var rateProduct = function(product, rating) {

      };
      /////////////////////////////////
      /////////////////////////////////


      /////////////////////////////////
      //API
      /////////////////////////////////
      return {
        //Admin
        getProduct: getSingleProduct,
        getProducts: getAllProducts,
        addNewProduct: addProduct,
        deleteProduct: deleteProduct,
        editProduct: editAProduct,
        //Storefront
        addComment: addComment,
        rateProduct: rateProduct
      };
      /////////////////////////////////
      /////////////////////////////////

    });
})();
