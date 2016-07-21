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
        .when('/view-categories', {   
          "controller": "CategorySettingsCtrl",
          "templateUrl": "views/category/view-category.view.html"
        })
        .when('/add-categories', {   
          "controller": "CategorySettingsCtrl",
          "templateUrl": "views/category/add-category.view.html"
        })
        .when('/view-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/view-commodity.view.html"
        })
        .when('/add-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/add-commodity.view.html"
        })
        .when('/view-technologies', {   
          "controller": "TechnologySettingsCtrl",
          "templateUrl": "views/technology/view-technology.view.html"
        })
        .when('/add-technologies', {   
          "controller": "TechnologySettingsCtrl",
          "templateUrl": "views/technology/add-technology.view.html"
        })
        .when('/technologies/:id', {   
          "controller": "TechnologySettingsCtrl",
          "templateUrl": "views/technology/one-technology.view.html"
        })
        .otherwise({"redirectTo": "home"});      
    }
})();
