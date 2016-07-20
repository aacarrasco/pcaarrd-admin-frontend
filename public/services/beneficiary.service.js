'use strict';

var apiUrl = 'http://api.sipag-fiesta.loc:8000';

(function(){
  angular
    .module("app")
    .service("BeneficiaryService", function($q, $http) {

      return {
        getBeneficiaries: function(id) {
          var deferred = $q.defer();
          $http.get(apiUrl + '/technologies/' + id + '/beneficiaries/')
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