angular.module('petClinicApp').controller('OwnerDetailsController', ['$stateParams', '$scope', 'ownerService',
function($stateParams, $scope, ownerService){
    var ownerId = $stateParams.ownerId || 0;
    ownerService.getOwner(ownerId).then(function(response){
        $scope.owner = response.data;
    });
}])
