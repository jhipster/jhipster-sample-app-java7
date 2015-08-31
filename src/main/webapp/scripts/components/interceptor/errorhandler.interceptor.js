'use strict';

angular.module('samplejava7App')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('samplejava7App.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });