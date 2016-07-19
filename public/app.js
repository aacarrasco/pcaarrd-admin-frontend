'use strict';
(function(){
    angular
        .module("app", ["ngRoute"])
        .config(config);
        
        config.$inject = ["$routeProvider"];
        function config($routeProvider){
            $routeProvider
                .when('/home', {   
                    "controller": "HomeCtrl",
                    "templateUrl": "views/home.view.html"
                })
                .otherwise({"redirectTo": "home"});                  //otherwise = else
        }
})();
