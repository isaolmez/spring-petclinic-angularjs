angular.module('petClinicApp').controller('OwnerListController', ['$scope', 'ownerService',
function($scope, ownerService){
    $scope.query = "";
    ownerService.getOwners().then(function(response){
        $scope.owners = response.data;
    });
}])
