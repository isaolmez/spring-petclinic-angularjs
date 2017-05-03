angular.module('petClinicApp').service('visitService', ['$http', function($http){
    this.getVisits = function(ownerId, petId){
        return $http.get('/owners/' + ownerId + '/pets/' + petId + '/visits');
    }

    this.createVisit = function(ownerId, petId, visit){
        return $http.post('/owners/' + ownerId + '/pets/' + petId + '/visits', visit);
    }
}]);
