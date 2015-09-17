/// <reference path="Scripts/_references.js" />
/**
 * Created by Pritesh on 5/29/15.
 */
(function (module) {
    "use strict";
    //angular.config(["$locationProvider", function ($locationProvider) {
    //    $locationProvider.html5Mode(true);
    //}]);
    //function config($urlRouterProvider, $locationProvider) {
    function config($urlRouterProvider) {
        $urlRouterProvider.when("/admin", '/admin');
        $urlRouterProvider.when("",'/home');
        $urlRouterProvider.when("/", '/home');
        $urlRouterProvider.otherwise('/home');
        //$locationProvider.html5Mode(true);
    }
    module.config(config);
}(angular.module("hrp")));