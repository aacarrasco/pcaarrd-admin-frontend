'use strict';

(function(){
  angular
    .module("app")
    .controller("CategorySettingsCtrl", function($scope, CategoryService) {
        $scope.categories = [];

        CategoryService.getCategories()
          .then(function(categories) {
            $scope.categories = categories.data.items;
          });
      });
})();