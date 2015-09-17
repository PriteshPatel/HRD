                                                                                     /**
 * Created by Pritesh on 5/29/15.
 */
(function (module) {
    "use strict";

    function config($locationProvider, $stateProvider) {
        $stateProvider
             .state('tod', {
                 url: "/admin/tod",
                 templateUrl: 'admin/TOD/typeofdiseases.html',
                 controller: 'todCtrl  as vm',
                 ncyBreadcrumb: { parent: "admin", label: 'Type Of Diseases' }
             })
             .state('tod.diseases', {
                 url: "/:id",
                 views: {
                     "": {},
                     "listOfTod": {
                         templateUrl: "admin/TOD/diseases.html",
                         controller: 'todCtrl  as vm'
                     },
                     "detailOfTod": {
                         templateUrl: "admin/TOD/detail.html",
                         controller: 'todCtrl  as vm',
                     },
                     //"@": {}
                 },
                 ncyBreadcrumb: { parent: "tod", label: 'Detail' }
             })
    }
    module.run(function($state){});
    module.config(config);//.run(function ($state) { }); // fixes ui-view in ng-include
}(angular.module('hrp.admin.tod')));