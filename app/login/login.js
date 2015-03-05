//LOGIN Controller
(function(){

  "use strict";
  angular.module('angShopping')
    .controller('LoginController', function (UserService, $location) {

    var loginCtrl = this;

    loginCtrl.goToStorefront = function(){
      $location.path('/store');
    };

    loginCtrl.login = function(username){
      if(username === 'brent'){
        UserService.setUser(username);
        $location.path('/adminproducts');
      };
    };

  });
})();
