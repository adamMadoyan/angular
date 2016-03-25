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
                templateUrl: "/views/partials/login.html",
                controller: 'login',
                data : {
                    pageMessage: 'login'
                }
            })
            .state('home', {
                name: 'home',
                title: 'home',
                url: '/home',
                controller: 'home',
                templateUrl: "/views/partials/home.html",
                data : {
                    pageMessage: 'home'
                }
            })
            .state('details', {
                name: 'details',
                title: 'details',
                url: '/details',
                controller: 'user',
                templateUrl: "test.html",
                data : {
                    pageMessage: 'Subtab 5 is active! And it\'s a Tab 4 subtab! End!'
                }
            })
            .state('salary', {
                name: 'salary',
                title: 'salary',
                url: '/salary',
                controller: 'user',
                templateUrl: "test.html",
                data : {
                    pageMessage: 'salarysalarysalary'
                }
            });

    }]);
