
angular
        .module('app')
        .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");


    $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "app/layout/main.html",
                controller: 'MainController as main'
            })
            .state('person', {
                templateUrl: "app/persons/person.html",
                controller: 'PersonController as person'
            })
            .state('person.detalle', {
                templateUrl: "app/persons/detalle.html"
//                controller: 'PersonController as person'
            })
            .state('person.detalle2', {
                templateUrl: "app/persons/detalle2.html"
//                controller: 'PersonController as person'
            })
            .state('group', {
                templateUrl: "app/groups/group.html",
                controller: 'GroupController as group'
            });

}


