angular.module('appCtrl', [])
.controller('appCtrl', function ($scope, appFact) {
  $scope.test = (input) => { console.warn('app') };

  $scope.switch = (input) => appFact.apps[input];

  $scope.app = $scope.switch('breadcrumb');
});
