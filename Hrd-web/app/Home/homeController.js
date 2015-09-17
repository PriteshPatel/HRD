/**
 * Created by Pritesh on 5/24/15.
 */
(function(module) {
    'use strict';
    

    function homeCtrl($scope,$http) {
        $scope.name = "PDP";
       

    }
    module.controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = [ '$scope','$http'];
})(angular.module('hrp.Home'));

