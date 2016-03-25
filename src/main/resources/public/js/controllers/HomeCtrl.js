'use strict';

UserManagement.app.controllers.controller("home", ["$rootScope", "$scope", "$state", "Restangular", function ($rootScope, $scope, $state, Restangular) {

    console.info('home controller');

    $scope.user = $rootScope.user;

    $scope.$state = $state;

    $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParam) {
            console.log('from', fromState);
            console.log('to', toState);
            $scope.pageMessage = toState.data.pageMessage;
            $scope.tabs = {};
            $scope.tabs['details'] = $state.includes('details');
            $scope.tabs['salary'] = $state.includes('salary');
        });

}]);
