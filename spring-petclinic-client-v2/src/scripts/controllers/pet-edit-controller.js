angular.module('petClinicApp').controller('PetEditController', ['$routeParams', '$location', '$scope', 'petService',
function($routeParams, $location, $scope, petService){
    var ownerId = $routeParams.ownerId || 0;
    var petId = $routeParams.petId || 0;
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
            $location.url('/owners/' + ownerId);
        });
    }
}])
