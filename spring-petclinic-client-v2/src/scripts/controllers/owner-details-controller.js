angular.module('petClinicApp').controller('OwnerDetailsController', ['$routeParams', '$scope', 'ownerService',
function($routeParams, $scope, ownerService){
    var ownerId = $routeParams.ownerId || 0;
    ownerService.getOwner(ownerId).then(function(response){
        $scope.owner = response.data;
    });
}])
