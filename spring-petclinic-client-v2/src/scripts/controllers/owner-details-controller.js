angular.module('petClinicApp').controller('OwnerDetailsController', ['$routeParams', '$scope', 'ownerService',
function($routeParams, $scope, ownerService){
    var ownerId = $routeParams.id || 0;
    ownerService.getOwner($routeParams.id).then(function(response){
        $scope.owner = response.data;
    });
}])
