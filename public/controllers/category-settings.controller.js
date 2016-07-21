'use strict';

(function(){
  angular
    .module("app")
    .controller("CategorySettingsCtrl", function($scope, $window, CategoryService) {
        console.log('CategorySettingsCtrl');
        $scope.categories = [];

        CategoryService.getCategories()
          .then(function(categories) {
            $scope.categories = categories.data.items;
          });

        $scope.reset = function(form) {
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
          $scope.category = [];
        };

        $scope.addCategory = function(category){
          $scope.category = angular.copy(category)  ;
          console.log($scope.category.name);
          console.log($scope.category.thumbnail);

          CategoryService.postCategory($scope.category)
            .then(function(data){
              console.log(data);
            });

        };

        $scope.editCategory = function(category){
          $scope.category = angular.copy(category);

          CategoryService.postCategory($scope.category)
            .then(function(data){
              console.log(data);
            });

        };

        $scope.removeCategory = function(category){
          let confirm = $window.confirm('Are you sure you want to delete this category?\nAll commodities and technologies under this category will be deleted.');

          if(confirm){
            $scope.category = angular.copy(category);
            console.log($scope.category);

            CategoryService.deleteCategory($scope.category)
              .then(function(data){
                console.log('Delete Category',data);
              })  
          }
          else {
            console.log('Cancel Delete Category');
          }
        };

       

         

      });
})(); 