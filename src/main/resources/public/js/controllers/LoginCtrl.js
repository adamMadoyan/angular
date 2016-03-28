'use strict';

/**
 * app user controllers
 */

UserManagement.app.controllers.controller("login",
    ["$scope", "Restangular", "$state", "$cookies", "cookieService",
        function ($scope, Restangular, $state, $cookies, cookieService) {

            (function checkUserLoggedIn() {
                var user = cookieService.getUser();
                if (user) {
                    if (user.admin) {
                        $state.go('admin');
                    } else {
                        $state.go('home');
                    }
                }
            })();

            //$scope.data = {
            //    email: "test@mail.ru",
            //    password: "test"
            //};
            $scope.data = {
                email: "admin@mail.ru",
                password: "admin"
            };

            //$scope.users = [];
            //$scope.user = {
            //    firstName: "Test",
            //    lastName: "Test",
            //    email: "Test@mail.ru",
            //    password: "qwerty"
            //};

            $scope.login = function () {

                Restangular.one('login').customGET('', {email: $scope.data.email, password: $scope.data.password})
                    .then(function (data) {
                            if (data.code == 200) {
                                cookieService.setUser(data.data);
                                if (data.data.admin) {
                                    $state.go('admin');
                                } else {
                                    $state.go('home');
                                }
                            }
                        }
                    );
            };

            //$scope.addUser = function () {
            //    console.info('starting....');
            //    Restangular.one('users')
            //        .post('', $scope.user)
            //        .then(function (data) {
            //            console.info(data);
            //            //if (data.status != 'success') {
            //            //
            //            //} else {
            //            //    $scope.user = {};
            //            //}
            //        });
            //    console.info('end');
            //};




        }
    ]
);