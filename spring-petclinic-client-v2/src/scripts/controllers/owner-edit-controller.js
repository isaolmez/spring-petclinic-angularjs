angular.module('petClinicApp').controller('OwnerEditController', ['$location', '$routeParams', '$scope', 'ownerService',
function($location, $routeParams, $scope, ownerService){
    var ownerId = $routeParams.ownerId || 0;
    $scope.owner = {};
    ownerService.getOwner(ownerId).then(function(response){
        $scope.owner = response.data;
    });

    $scope.submitOwnerForm = function () {
        ownerService.updateOwner($scope.owner)
        .then(function(response){
            $location.url('/owners');
        });
    };
}]);
