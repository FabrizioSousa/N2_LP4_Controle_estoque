(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        $stateProvider
                 .state('Estoque', {
                url: '/estoque',
                templateUrl: 'Estoque/index.html',
                controller: 'Estoque.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'Estoque' }
                 })
                .state('Consulta', {
                    url: '/consulta',
                    templateUrl: 'Consulta/index.html',
                    controller: 'Consulta.IndexController',
                    controllerAs: 'vm',
                    data: { activeTab: 'Consulta' }
            })
            
            
    }

    function run($http, $rootScope, $window) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
          //  console.log($rootScope.activeTab);
            $rootScope.activeTab = toState.data.activeTab;
            //console.log($rootScope.activeTab);
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;

            angular.bootstrap(document, ['app']);
        });
    });
})();