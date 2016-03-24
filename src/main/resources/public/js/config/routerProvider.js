'use strict';

UserManagement.app.config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {

        /* set up app default url*/
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                name: 'login',
                title: 'login',
                url: '/login',
                views: {
                    "view": { templateUrl: "/views/partials/login.html" }
                },
                controller: function($scope) {
                    console.info('sdfsdfsdf');
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                }
            })
            .state('home', {
                name: 'home',
                title: 'home',
                url: '/home',
                controller: 'home',
                views: {
                    "view": { templateUrl: "/views/partials/home.html" }
                }
            })
            .state('test', {
                name: 'test',
                title: 'test',
                url: '/test',
                controller: 'user',
                views: {
                    "view": { templateUrl: "test.html" }
                }
            }
        );

    }]);
