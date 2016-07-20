'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("CategoryService", function($q, $http) {

      return {
        getCategories: function() {
          var deferred = $q.defer();
          $http.get(apiUrl + '/categories')
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        postCategory: function() {
          var deferred = $q.defer();
          $http.get(apiUrl + '/categories/')
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