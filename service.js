(function () {
  "use strict";
  angular.module('angShopping')
    .factory('ProductsService', function() {
      var products = [
        {
          name: "Product 1",
          price: '5.99',
          category: 'animals',
          picture: 'https://placeimg.com/300/300/animals',
          description: 'what a cute animal',
          rating: 3
        },
        {
          name: "Product 2",
          price: '6.99',
          category: 'tech',
          picture: 'https://placeimg.com/300/300/tech',
          description: 'what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech.  what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech.  what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech.  what a cool tech. what a cool tech. what a cool tech. what a cool tech. what a cool tech. ',
          rating: 4
        },
        {
          name: "Product 3",
          price: '7.99',
          category: 'nature',
          picture: 'https://placeimg.com/300/300/nature',
          description: 'what a beautiful nature',
          rating: 5
        },
        {
          name: "Product 4",
          price: '8.99',
          category: 'people',
          picture: 'https://placeimg.com/300/300/people',
          description: 'what a good people',
          rating: 2
        },
        {
          name: "Product 5",
          price: '9.99',
          category:'architecture',
          picture: 'https://placeimg.com/300/300/arch',
          description: 'what a badass building',
          rating: 5
        }
      ];

      var getAllProducts = function () {
        return products;
      };

      var addProduct = function (product) {
        products.push(product);
      };

      var deleteProduct = function(idx){
        products.splice(idx, 1);
      };

      var editAProduct = function(product, idx) {

      };

      //API stuff goes here
      return {
        getProducts: getAllProducts,        //Left is public API, Right is service function
        addNewProduct: addProduct,
        deleteProduct: deleteProduct
      };

    });
})();
