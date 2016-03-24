'use strict';

UserManagement.app.controllers.controller("main", ["$scope", "$state", function($scope, $state) {
    console.info('main controller');
    $state.go('login');

    console.info('end main');

}]);

