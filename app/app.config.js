
angular
        .module('app')
        .config(configure);

configure.$inject = ['$routeProvider'];

function configure ($routerProvider){
    $routerProvider
            .when('/', {
                templateUrl: 'app/layout/main.html',
                controller: 'MainController as main'
            });
    
}



     