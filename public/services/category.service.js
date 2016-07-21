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

        postCategory: function(category) {
          var deferred = $q.defer();
          $http.post(apiUrl + '/categories/', category)
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        editCategory: function(category) {
          var deferred = $q.defer();
          $http.put(apiUrl + '/categories/'+ category.oldName, category)
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(err) {
              deferred.reject(err);
            });

          return deferred.promise;
        },

        deleteCategory: function(category) {
          var deferred = $q.defer();
          $http.delete(apiUrl + '/categories/'+ category.name)
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