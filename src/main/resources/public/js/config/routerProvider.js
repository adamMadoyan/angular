'use strict';

UserManagement.app.config(
    ["$stateProvider", "$urlRouterProvider",
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
                    data: {
                        pageMessage: 'login'
                    },
                    isAuth: false,
                    isAdmin: false
                })
                .state('home', {
                    name: 'home',
                    title: 'home',
                    url: '/home',
                    controller: 'home',
                    templateUrl: "/views/partials/home.html",
                    data: {
                        pageMessage: 'home'
                    },
                    isAuth: true,
                    isAdmin: false
                })
                .state('admin', {
                    name: 'admin',
                    title: 'admin',
                    url: '/admin',
                    controller: 'adminCtrl',
                    templateUrl: '/views/partials/admin/home.html',
                    isAuth: true,
                    isAdmin: true
                });
        }
    ]
);

