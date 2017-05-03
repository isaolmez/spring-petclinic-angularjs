angular.module('petClinicApp').controller('VetListController', ['$scope', 'vetService',
function($scope, vetService){
    vetService.getVets().then(function(response){
        $scope.vetList = response.data;
    });
}]);
