'use strict';

angular.module('samplejava7App')
    .controller('LabelDetailController', function ($scope, $rootScope, $stateParams, entity, Label, Operation) {
        $scope.label = entity;
        $scope.load = function (id) {
            Label.get({id: id}, function(result) {
                $scope.label = result;
            });
        };
        $rootScope.$on('samplejava7App:labelUpdate', function(event, result) {
            $scope.label = result;
        });
    });
