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

    $scope.myData = [{name: "Moroni", age: 50},
        {name: "Tiancum", age: 43},
        {name: "Jacob", age: 27},
        {name: "Nephi", age: 29},
        {name: "Enos", age: 34}];
    $scope.gridOptions = { data: 'myData' };

    $scope.user = $cookies.getObject('user');
}]);
