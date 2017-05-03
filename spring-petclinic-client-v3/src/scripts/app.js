'use strict';
var petClinicApp = angular.module('petClinicApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app', {
        abstract : true,
        url: '',
        views :{
            'header' : {
                templateUrl : 'scripts/fragments/nav.html'
            },
            'content' : {
                template : '<ui-view></ui-view>'
            },
            'footer' : {
                templateUrl : 'scripts/fragments/footer.html'
            }
        }
    })
    .state('welcome', {
        parent : 'app',
        url : '/welcome',
        views : {
            'content@' : {
                templateUrl : 'scripts/fragments/welcome.html'
            }
        }
    })
    .state('owners', {
        parent : 'app',
        url : '/owners',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/owner-list.template.html',
                controller : 'OwnerListController'
            }
        }
    })
    .state('ownerNew', {
        parent : 'app',
        url : '/owners/new',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/owner-form.template.html',
                controller : 'OwnerCreateController'
            }
        }
    })
    .state('ownerDetails', {
        parent : 'app',
        url : '/owners/:ownerId',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/owner-details.template.html',
                controller : 'OwnerDetailsController'
            }
        }
    })
    .state('ownerEdit',{
        parent : 'app',
        url : '/owners/:ownerId/edit',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/owner-form.template.html',
                controller : 'OwnerEditController'
            }
        }
    })
    .state('petNew',{
        parent : 'app',
        url : '/owners/:ownerId/pets/new',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/pet-form.template.html',
                controller : 'PetCreateController'
            }
        }
    })
    .state('petEdit', {
        parent : 'app',
        url :'/owners/:ownerId/pets/:petId/edit',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/pet-form.template.html',
                controller : 'PetEditController'
            }
        }
    })
    .state('visits', {
        parent : 'app',
        url : '/owners/:ownerId/pets/:petId/visits',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/visits.template.html',
                controller : 'VisitListController'
            }
        }
    })
    .state('vets', {
        parent : 'app',
        url : '/vets',
        views : {
            'content@' : {
                templateUrl : 'scripts/templates/vet-list.template.html',
                controller : 'VetListController'
            }
        }
    });

    $urlRouterProvider.otherwise('/welcome')
});
