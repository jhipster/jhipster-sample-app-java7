'use strict';

angular.module('samplejava7App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
