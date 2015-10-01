 'use strict';

angular.module('samplejava7App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplejava7App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplejava7App-params')});
                }
                return response;
            }
        };
    });
