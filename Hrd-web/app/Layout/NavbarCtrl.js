(function (module) {
    'use strict';

    function Navbar($scope, $rootScope, $location) {
        //var vm = this;
        function toggleNavbar() {
            $scope.collapseNavbar = !$scope.collapseNavbar;
        }
    }
    module.controller('Navbar', ['$scope', '$rootScope', '$location', Navbar]);
}(angular.module('hrp.layout')));