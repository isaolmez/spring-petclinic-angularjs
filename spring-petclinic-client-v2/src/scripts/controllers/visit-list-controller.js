angular.module('petClinicApp').controller('VisitListController', ['$scope', '$routeParams', '$location', 'visitService',
function($scope, $routeParams, $location, visitService){
    var ownerId = $routeParams.ownerId || 0;
    var petId = $routeParams.petId || 0;
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
