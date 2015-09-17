(function (module) {
    'use strict';

    function Shell($state, $rootScope, $scope) {
        var vm = this;
        
        
        function toggleNavbar() {
            vm.collapseNavbar = !vm.collapseNavbar;
        }

        function closeNavbar() {
            vm.collapseNavbar = true;
        }

    };
    
    module.controller('Shell', Shell);
    Shell.$inject = ['$state', '$rootScope', '$scope'];
}(angular.module('hrp.layout')));