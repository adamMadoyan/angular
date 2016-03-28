'use strict';

UserManagement.app.controllers.controller("adminCtrl",
    ["$scope", "Restangular", "$uibModal",
        function ($scope, Restangular, $uibModal) {

            $scope.users = [];
            // get users by pagination
            Restangular.all('users')
                .customGET("", {limit: 4, offset: 0})
                .then(function (users) {
                        $scope.users = users.content;
                    }
                );

            $scope.gridOptions = {
                data: 'users',
                columnDefs: [
                    {
                        field: 'firstName',
                        displayName: 'First Name',
                        cellTemplate: '<div  ng-click="gridItemClicked(row.rowIndex)" ng-bind="row.getProperty(col.field)"></div>'
                    },
                    {
                        field: 'lastName',
                        displayName: 'Last Name',
                        cellTemplate: '<div  ng-click="gridItemClicked(row.rowIndex)" ng-bind="row.getProperty(col.field)"></div>'
                    },
                    {
                        field: 'email',
                        displayName: 'Email',
                        cellTemplate: '<div  ng-click="gridItemClicked(row.rowIndex)" ng-bind="row.getProperty(col.field)"></div>'
                    }
                ],
                multiSelect: false
            };


            $scope.gridItemClicked = function(id) {
                $scope.selectedUser = $scope.users[id];
                $scope.open();
            };

            $scope.open = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/views/modals/user_details.html',
                    controller: function ($scope, item) {
                        $scope.user = item;
                    },
                    size: 'sm',
                    resolve: {
                        item: function () {
                            return $scope.selectedUser;
                        }
                    }
                });

                modalInstance.result.then(function () {
                    console.info('closed modal');
                });
            };


        }
    ]
);