"use strict";

/**
 * @file app.js
 * app bootstrap file
 */

UserManagement.app = angular.module("UserManagementApp", [
    'restangular',
    'ui.router',
    'UserManagement.app.controllers',
    'UserManagement.app.services',
    'UserManagement.app.directives',
    'UserManagement.app.filters'
]);