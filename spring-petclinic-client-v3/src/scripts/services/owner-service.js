angular.module('petClinicApp').service('ownerService',['$http', function($http){
    this.getOwners = function(){
        return $http.get('/owners/list');
    }

    this.getOwner = function(id){
        return $http.get('/owners/' + id);
    }

    this.updateOwner = function(owner){
        return $http.put('/owners/' + owner.id, owner);
    }

    this.createOwner = function(owner){
        return $http.post('/owners', owner);
    }
}
]);
