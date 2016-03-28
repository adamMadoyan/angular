"use strict";

/**
 * @file app.js
 * app bootstrap file
 */

UserManagement.app = angular.module("UserManagementApp", [
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'ngCookies',
    'ngGrid',
    'UserManagement.app.controllers',
    'UserManagement.app.services',
    'UserManagement.app.directives',
    'UserManagement.app.filters'
]);