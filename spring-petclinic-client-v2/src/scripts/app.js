'use strict';
var petClinicApp = angular.module('petClinicApp',['ngRoute']).config(function($routeProvider){
$routeProvider
.when('/welcome', {
templateUrl : 'scripts/templates/welcome.html'
})
.when('/owners', {
templateUrl : 'scripts/templates/owner-list.template.html',
controller : 'OwnerListController'
})
.when('/owners/new', {
templateUrl : 'scripts/templates/owner-form.template.html',
controller : 'OwnerCreateController'
})
.when('/owners/:id', {
templateUrl : 'scripts/templates/owner-details.template.html',
controller : 'OwnerDetailsController'
})
.when('/owners/:id/edit', {
templateUrl : 'scripts/templates/owner-form.template.html',
controller : 'OwnerEditController'
})
.when('/owners/:ownerId/pets/new',{
templateUrl : 'scripts/templates/pet-form.template.html',
controller : 'PetCreateController'
})
.when('/owners/:ownerId/pets/:petId/edit', {
templateUrl : 'scripts/templates/pet-form.template.html',
controller : 'PetEditController'
})
.when('/owners/:ownerId/pets/:petId/visits', {
templateUrl : 'scripts/templates/visits.template.html',
controller : 'VisitListController'
})
.when('/vets', {
templateUrl : 'scripts/templates/vet-list.template.html',
controller : 'VetListController'
})
.otherwise('/welcome')
});
