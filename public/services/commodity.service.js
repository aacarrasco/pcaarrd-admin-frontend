'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("CommodityService", function($q, $http) {

      return {
        getCommodities: function() {
          var deferred = $q.defer();
          $http.get(apiUrl + '/commodities')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        getCommoditiesPerCategory: function(category) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/' + category + '/commodities')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        postCommodity: function(commodity) {
          var deferred = $q.defer();
          $http.post(apiUrl + '/commodities/', commodity)
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        deleteCommodity: function(commodity) {
          var deferred = $q.defer();
          $http.delete(apiUrl + '/commodities/'+ commodity.commodity_id)
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        } 

                  
      }

  });

})();