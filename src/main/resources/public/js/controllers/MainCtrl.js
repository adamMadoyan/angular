'use strict';

UserManagement.app.controllers.controller("main",
    ["$rootScope", "$scope", "$state", "cookieService",
        function ($rootScope, $scope, $state, cookieService) {
            console.info('main controller');
            $state.go('login');

            console.info('end main');


            function logout() {
                console.info('log out');
            }

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    var val = cookieService.get();
                    if (toState.isAuth && (angular.isUndefined(val) || val == null)) {
                        $state.go('login');
                        event.preventDefault();
                    }
                }
            );

        }
    ]
);

