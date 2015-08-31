'use strict';

angular.module('samplejava7App')
    .controller('OperationDetailController', function ($scope, $rootScope, $stateParams, entity, Operation, BankAccount, Label) {
        $scope.operation = entity;
        $scope.load = function (id) {
            Operation.get({id: id}, function(result) {
                $scope.operation = result;
            });
        };
        $rootScope.$on('samplejava7App:operationUpdate', function(event, result) {
            $scope.operation = result;
        });
    });
