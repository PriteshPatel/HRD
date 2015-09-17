angular.module('hrp.footer').controller('LegalDisclaimerCtrl', function ($scope) {


});

//angular.module('hrp.footer').controller('LegalDisclaimerCtrl', function ($scope, $modal) {
//
//    $scope.items = ['LegalDisclaimer1', 'LegalDisclaimer2', 'LegalDisclaimer3'];
//    var modalInstance = $modal({
//        scope:$scope,
//        contentTemplate: 'Layout/LegalDisclaimer.html',
//        show: false
//       });
//
//    var modalInstanceTrue = $modal({
//        scope: $scope,
//        contentTemplate: 'Layout/HRTeam.html',
//        show: false
//       });
//    $scope.open = function (size) {
//        modalInstance.$promise.then(modalInstance.show);
//       };
//    $scope.openContact = function (size) {
//        modalInstanceTrue.$promise.then(modalInstanceTrue.show);
//       };
//
//    $scope.cancel = function () {
//        modalInstance.hide();
//    };
//
//    $scope.close = function () {
//        modalInstanceTrue.hide();
//    };
//    $scope.showPrint = function (id) {
//
//        {
//            var html = "<html>";
//            html += document.getElementById(id).innerHTML;
//
//            html += "</html>";
//
//            var printWin = window.open('', '_blank', 'height = 765', 'width = 765',true);
//            printWin.document.write(html);
//            printWin.document.close();
//            printWin.focus();
//            printWin.print();
//            printWin.close();
//        }
//
//
//    }
//
//});


