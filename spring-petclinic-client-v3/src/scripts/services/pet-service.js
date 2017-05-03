angular.module('petClinicApp').service('petService', ['$http', function($http){
    this.getPets = function(ownerId){
        return $http.get('/owners/' + ownerId + '/pets');
    };

    this.getPet = function(ownerId, petId){
        return $http.get('/owners/' + ownerId + '/pets/' + petId);
    }

    this.createPet = function(ownerId, pet){
        return $http.post('/owners/' + ownerId + '/pets', pet);
    }

    this.updatePet = function(ownerId, pet){
        return $http.put('/owners/' + ownerId + '/pets/' + pet.id, pet);
    }

    this.getPetTypes = function(){
        return $http.get('/petTypes');
    }
}]);
