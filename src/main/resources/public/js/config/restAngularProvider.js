'use strict';

UserManagement.app.config(function (RestangularProvider, Config) {
    RestangularProvider.setBaseUrl(Config.apiUrl);
    //RestangularProvider.setDefaultHeaders({ "Content-Type": "application/json" });
});
