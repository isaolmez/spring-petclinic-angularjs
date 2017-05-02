angular.module('petClinicApp').controller('PetCreateController', ['$routeParams', '$location', '$scope', 'petService', 'ownerService',
function($routeParams, $location, $scope, petService, ownerService){
    var ownerId = $routeParams.ownerId || 0;
    var petId = $routeParams.petId || 0;
    $scope.pet = {};
    petService.getPetTypes().then(function(response){
        $scope.types = response.data;
    }).then(function(){
        ownerService.getOwner(ownerId).then(function(response){
            var owner = response.data;
            $scope.pet.owner = owner.firstName + ' ' + owner.lastName;
            $scope.pet.typeId = "1";
        });
    });

    $scope.submit = function(){
        petService.createPet(ownerId, $scope.pet).then(function(){
            $location.url('/owners/' + ownerId);
        });
    }
}]);
