'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("LocationService", function($q, $http) {

      return {
        getLocations: function(id) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/technologies/' + id + '/locations/')
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