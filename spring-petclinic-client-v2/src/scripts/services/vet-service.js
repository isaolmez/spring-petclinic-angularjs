angular.module('petClinicApp').service('vetService', ['$http', function($http){
    this.getVets = function(){
        return $http.get('/vets');
    }
}]);
