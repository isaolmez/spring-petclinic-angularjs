angular.module('petClinicApp').controller('PetEditController', ['$stateParams', '$state', '$scope', 'petService',
function($stateParams, $state, $scope, petService){
    var ownerId = $stateParams.ownerId || 0;
    var petId = $stateParams.petId || 0;
    petService.getPetTypes().then(function(response){
        $scope.types = response.data;
    }).then(function(){
        petService.getPet(ownerId, petId).then(function(response){
            $scope.pet = response.data;
            $scope.pet.typeId = "" + $scope.pet.type.id;
            $scope.pet.birthDate = new Date($scope.pet.birthDate);
        });
    });

    $scope.submit = function(){
        petService.updatePet(ownerId, $scope.pet).then(function(){
            $state.go('ownerDetails', {'ownerId' : ownerId});
        });
    }
}])
