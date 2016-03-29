'use strict';

UserManagement.app.controllers.controller("main",
    ["$rootScope", "$scope", "$state", "cookieService",
        function ($rootScope, $scope, $state, cookieService) {
            $state.go('login');

            $scope.logout = function () {
                cookieService.removeUser();
                $state.go('login');
            };

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    var user = cookieService.getUser();
                    if (toState.isAuth && (angular.isUndefined(user) || user == null)) {
                        $state.go('login');
                        event.preventDefault();
                    } else if (toState.isAdmin && !user.admin) {
                        $state.go(fromState);
                        event.preventDefault();
                    }
                }
            );

        }
    ]
);

