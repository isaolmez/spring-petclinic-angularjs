angular.module('petClinicApp').controller('OwnerCreateController', ['$state', '$scope', 'ownerService',
function($state, $scope, ownerService){
    $scope.owner = {};

    $scope.submitOwnerForm = function () {
        ownerService.createOwner($scope.owner).then(function(response){
            $state.go('owners');
        });
    };
}])
