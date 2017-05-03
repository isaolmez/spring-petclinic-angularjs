angular.module('petClinicApp').controller('VisitListController', ['$scope', '$stateParams', '$location', 'visitService',
function($scope, $stateParams, $location, visitService){
    var ownerId = $stateParams.ownerId || 0;
    var petId = $stateParams.petId || 0;
    $scope.visit = {};

    visitService.getVisits(ownerId, petId).then(function(response){
        $scope.visits = response.data;
    });

    $scope.submit = function(){
        visitService.createVisit(ownerId, petId, $scope.visit).then(function(){
            visitService.getVisits(ownerId, petId).then(function(response){
                $scope.visits = response.data;
                $location.url('/owners/' + ownerId);
            });
        });
    }
}]);
