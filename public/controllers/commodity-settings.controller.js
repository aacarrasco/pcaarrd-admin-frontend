'use strict';

(function(){
  angular
    .module("app")
    .controller("CommoditySettingsCtrl", function($scope, $window, CommodityService, CategoryService){
        $scope.commodities = [];
        $scope.categories = [];

        CommodityService.getCommodities()
          .then(function(data) {
            $scope.commodities = data.data.items;
          });

        CategoryService.getCategories()
          .then(function(data) {
            $scope.categories = data.data.items;
          });

        $scope.reset = function(form) {
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
          $scope.category = [];
        };

        $scope.addCommodity = function(commodity){
          $scope.commodity = angular.copy(commodity);
          console.log($scope.commodity);
          
          CommodityService.postCommodity($scope.commodity)
            .then(function(data){
              console.log(data);
            });

        };

        $scope.removeCommodity = function(commodity){
          let confirm = $window.confirm('Are you sure you want to delete this commodity?\nAll technologies under this commodity will be deleted');

          if(confirm){
            $scope.commodity = angular.copy(commodity);
            console.log($scope.commodity);

            CommodityService.deleteCommodity($scope.commodity)
              .then(function(data){
                console.log('Delete Commodity',data);
              })  
          }
          else {
            console.log('Cancel Delete Commodity');
          }
        };

      });
})();