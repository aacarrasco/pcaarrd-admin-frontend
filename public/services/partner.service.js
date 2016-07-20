'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("PartnerService", function($q, $http) {

      return {
        getPartners: function(id) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/technologies/' + id + '/partners/')
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