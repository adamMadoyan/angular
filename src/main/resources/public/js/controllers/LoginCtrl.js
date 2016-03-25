'use strict';

/**
 * app user controllers
 */

UserManagement.app.controllers.controller("login",
            ["$rootScope", "$scope", "Restangular", "$state",
    function ($rootScope, $scope, Restangular, $state) {

    console.info('login controller');

    $scope.data = {
        email : "test@mail.ru",
        password : "qwerty"
    };

    //$scope.users = [];
    //$scope.user = {
    //    firstName: "Test",
    //    lastName: "Test",
    //    email: "Test@mail.ru",
    //    password: "qwerty"
    //};

    $scope.login = function() {

        Restangular.one('login')
            .customGET('', {email: $scope.data.email, password: $scope.data.password})
            .then(function (data) {
                console.info(data);
                console.info(data.data);
                $rootScope.user = data.data;
                if (data.code == 200) {
                    $state.go('home', data.data);
                }
            });
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
    //
    //Restangular.all('users')
    //    .customGET("", {limit: 4, offset: 0})
    //    .then(function (users) {
    //        $scope.users = users.content;
    //    }
    //);
    //
    //$scope.showModal = false;
    //$scope.toggleModal = function(){
    //    $scope.showModal = !$scope.showModal;
    //};

}]);