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
        .when('/edit-categories', {   
          "controller": "CategorySettingsCtrl",
          "templateUrl": "views/category/edit-category.view.html"
        })
        .when('/remove-categories', {   
          "controller": "CategorySettingsCtrl",
          "templateUrl": "views/category/remmove-category.view.html"
        })
        .when('/view-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/view-commodity.view.html"
        })
        .when('/add-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/add-commodity.view.html"
        })
        .when('/edit-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/edit-commodity.view.html"
        })
        .when('/remove-commodities', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/commodity/remmove-commodity.view.html"
        })
        .when('/view-technologies', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/technology/view-technology.view.html"
        })
        .when('/add-technologies', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/technology/add-technology.view.html"
        })
        .when('/edit-technologies', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/technology/edit-technology.view.html"
        })
        .when('/remove-technologies', {   
          "controller": "CommoditySettingsCtrl",
          "templateUrl": "views/technology/remmove-technology.view.html"
        })
        .otherwise({"redirectTo": "home"});      
    }
})();
