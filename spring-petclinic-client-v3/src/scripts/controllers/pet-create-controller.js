angular.module('petClinicApp').controller('PetCreateController', ['$stateParams', '$location', '$scope', 'petService', 'ownerService',
function($stateParams, $location, $scope, petService, ownerService){
    var ownerId = $stateParams.ownerId || 0;
    var petId = $stateParams.petId || 0;
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
