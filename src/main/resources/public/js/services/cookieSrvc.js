'use strict';

UserManagement.app.services.service('cookieService', function ($cookies, $rootScope) {

    /*return user object or null*/
    this.get = function () {
        return $cookies.getObject('user');
    };

    /*@params {user} object*/
    this.set = function (user) {
        $cookies.putObject('user', user);
        $rootScope.user = user;
    };

    this.remove = function() {
        $cookies.remove('user');
    };

});

