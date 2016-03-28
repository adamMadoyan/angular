'use strict';

UserManagement.app.controllers.controller("home",
    ["$scope", "$state", "Restangular", "$cookies",
function ($scope, $state, Restangular, $cookies) {

    this.tab = 1;

    this.selectTab = function (setTab){
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };

    $scope.user = $cookies.getObject('user');
}]);
