(function (module) {
    'use strict';
    function todCtrl($scope, $http, $stateParams) {
        var refresh = function () {
            $http.get('/typeOfDiseases').success(function (response) {
                console.log("I got the data I requested");
                $scope.typeOfDiseases = response;
                //$scope.contact = "";
            });
        };
        refresh();
        var getDiseases = function (id) {
            $http.get('/diseases/' + id).success(function (response) {
                    $scope.disDetail = response;
                });
        };
        if ($stateParams.id === undefined && $stateParams.id === null) {
            $scope.disDetail = null;
        } else {
            getDiseases($stateParams.id);
        }
    }
    module.controller('todCtrl', todCtrl);
    todCtrl.$inject = ['$scope', '$http', '$stateParams'];
})(angular.module('hrp.admin.tod'));


