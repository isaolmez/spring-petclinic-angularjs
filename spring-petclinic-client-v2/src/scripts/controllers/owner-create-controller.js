angular.module('petClinicApp').controller('OwnerCreateController', ['$location', '$routeParams', '$scope', 'ownerService',
function($location, $routeParams, $scope, ownerService){
    $scope.owner = {};

    $scope.submitOwnerForm = function () {
        ownerService.createOwner($scope.owner).then(function(response){
            $location.url('/owners');
        });
    };
}])
