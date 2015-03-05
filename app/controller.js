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
})();
