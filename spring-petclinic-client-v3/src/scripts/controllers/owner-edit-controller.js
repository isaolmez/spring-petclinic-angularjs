angular.module('petClinicApp').controller('OwnerEditController', ['$state', '$stateParams', '$scope', 'ownerService',
function($state, $stateParams, $scope, ownerService){
    var ownerId = $stateParams.ownerId || 0;
    $scope.owner = {};
    ownerService.getOwner(ownerId).then(function(response){
        $scope.owner = response.data;
    });

    $scope.submitOwnerForm = function () {
        ownerService.updateOwner($scope.owner)
        .then(function(response){
            $state.go('owners');
        });
    };
}]);
