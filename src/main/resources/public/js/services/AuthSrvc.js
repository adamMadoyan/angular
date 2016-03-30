'use strict';

UserManagement.app.services.service('authService',
    ['$http', 'Config',
        function ($http, Config) {

            this.login = function (params, callback) {
                $http({
                    method: Config.requests.user.login.method,
                    url: Config.requests.user.login.url,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    async: false,
                    cache: false,
                    dataType: 'json',
                    contentType: 'application/json',
                    params: params
                }).success(function (data, status, headers, config) {
                    callback(data);
                }).error(function (data, status, headers, config) {
                    console.error(data);
                })
            };

        }
    ]
);