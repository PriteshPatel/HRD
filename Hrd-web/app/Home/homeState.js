/**
 * Created by Pritesh on 5/29/15.
 */
(function (module) {
    "use strict";

    function config($locationProvider, $stateProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: 'Home/home.html',
                controller: 'homeCtrl  as vm',
                ncyBreadcrumb: { label: 'Home' }
            })
            .state('ui', {
                url: "/ui",
                templateUrl: 'Home/ui.html',

                ncyBreadcrumb: { parent:'home', label: 'UI' }
            })
    }
    module.run(function($state){});
    module.config(config);//.run(function ($state) { }); // fixes ui-view in ng-include
}(angular.module('hrp.Home')));