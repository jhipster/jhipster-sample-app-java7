'use strict';

angular.module('samplejava7App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


