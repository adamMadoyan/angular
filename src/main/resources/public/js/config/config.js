'use strict';

/**
 * @file config.js
 * app configuration file
 */

var baseUrl = "http://localhost:5000";

UserManagement.app.constant("Config", {
    appName: "User management",
    apiUrl: baseUrl,
    requests: {
        user: {
            create: {
                url: baseUrl + "/users",
                method: "POST"
            },
            getAll: {
                url: baseUrl + "/users",
                method: "GET"
            },
            login : {
                url: baseUrl + "/login",
                method: "POST"
            }
        }
    }
});
