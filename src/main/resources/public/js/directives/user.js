'use strict';

UserManagement.app.directives.directive("user", [function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/views/directives/user.html',
        scope: {
            data: "="
        }
    }
}]);
