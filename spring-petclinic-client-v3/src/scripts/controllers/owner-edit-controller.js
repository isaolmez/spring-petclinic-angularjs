angular.module('petClinicApp').controller('OwnerEditController', ['$location', '$stateParams', '$scope', 'ownerService',
function($location, $stateParams, $scope, ownerService){
    var ownerId = $stateParams.ownerId || 0;
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
