'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("TechnologyService", function($q, $http) {

      return {
        getTechnologies: function() {
          var deferred = $q.defer();
          $http.get(apiUrl + '/technologies')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        getOneTechnology: function(id) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/technologies/' + id)
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        getTechnologiesPerCategory: function(category) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/category/' + category + '/technologies')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        getTechnologiesPerCommodity: function(commodity) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/commodity/' + commodity + '/technologies')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        postTechnology: function(technology) {
          var deferred = $q.defer();
          $http.post(apiUrl + '/technology/', category)
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