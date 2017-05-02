angular.module('petClinicApp').controller('OwnerListController', ['$routeParams', '$scope', 'ownerService',
function($routeParams, $scope, ownerService){
    $scope.query = "";
    ownerService.getOwners().then(function(response){
        $scope.owners = response.data;
    });
}])
