angular.module('petClinicApp').controller('OwnerCreateController', ['$location', '$scope', 'ownerService',
function($location, $scope, ownerService){
    $scope.owner = {};

    $scope.submitOwnerForm = function () {
        ownerService.createOwner($scope.owner).then(function(response){
            $location.url('/owners');
        });
    };
}])
