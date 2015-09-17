/**
 * Created by Pritesh on 5/29/15.
 */
(function (module) {
    "use strict";

    function config($locationProvider, $stateProvider) {
        $stateProvider
              .state('admin', {
                  url: "/admin",
                  templateUrl: 'admin/admin.html',
                  controller: 'adminCtrl  as vm',
                  ncyBreadcrumb: { parent:"home", label: 'Administrator' }
              })
    }
    module.run(function($state){});
    module.config(config);//.run(function ($state) { }); // fixes ui-view in ng-include
}(angular.module('hrp.admin')));