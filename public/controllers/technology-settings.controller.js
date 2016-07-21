'use strict';

(function(){
  angular
    .module("app")
    .controller("TechnologySettingsCtrl", function($scope, $routeParams, TechnologyService, CommodityService, CategoryService, ObjectiveService, BenefitService, BeneficiaryService, LocationService, PartnerService, ImageService) {
        $scope.technologies = [];
        $scope.commodities = [];
        
        TechnologyService.getOneTechnology($routeParams.id)
          .then(function(data){
            $scope.currentTechnology = data.data.items[0];

            $scope.currentTechnology.objectives = [];
            ObjectiveService.getObjectives($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.objectives = data.data.items;
              });

            $scope.currentTechnology.benefits = [];
            BenefitService.getBenefits($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.benefits = data.data.items;
              });

            $scope.currentTechnology.beneficiaries = [];
            BeneficiaryService.getBeneficiaries($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.beneficiaries = data.data.items;
              });

            $scope.currentTechnology.locations = [];
            LocationService.getLocations($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.locations = data.data.items;
              });

            $scope.currentTechnology.partners = [];
            PartnerService.getPartners($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.partners = data.data.items;
              });

            $scope.currentTechnology.images = [];
            ImageService.getImages($scope.currentTechnology.technology_id)
              .then(function(data){
                $scope.currentTechnology.images = data.data.items;
              });

          });

        TechnologyService.getTechnologies()
          .then(function(data) {
            $scope.technologies = data.data.items;
          });

        CommodityService.getCommodities()
          .then(function(data) {
            $scope.commodities = data.data.items;
          });


        $scope.reset = function(form) {
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
          $scope.technology = [];
          $scope.benefits = [];
          $scope.beneficiaries = [];
          $scope.locations = [];
          $scope.partners = [];
        };

        $scope.addTechnology = function(technology){
          $scope.technology = angular.copy(technology);

          CommodityService.getCommodityId($scope.technology.commodity)
            .then(function(data){
              $scope.technology.commodity_id = data.data.items[0].commodity_id;
            });

          TechnologyService.postTechnology($scope.technology)
            .then(function(data){
              console.log(data);
            });

        };
      });
})();