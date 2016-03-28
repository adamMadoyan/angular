'use strict';

UserManagement.app.services.service('cookieService', function ($cookies, $rootScope) {

    /*return user object or null*/
    this.getUser = function () {
        return $cookies.getObject('user');
    };

    /*@params {user} object*/
    this.setUser = function (user) {
        $cookies.putObject('user', user);
        $rootScope.user = user;
    };

    this.removeUser = function() {
        $cookies.remove('user');
    };

});

