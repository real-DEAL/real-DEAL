angular.module('appCtrl', [])
.controller('appCtrl', function ($scope, $rootScope, $resolve, appFact, app) {
  console.log($scope)

  // if ($resolve.app) {
  $rootScope.app = app;
  // }

  // $rootScope.app = $resolve.app || null;

  $scope.shot = 0;

  $scope.apps = appFact.apps;

  $scope.next = () => {
    $scope.shot === $scope.app.screenshots.length - 1 ?
    $scope.shot = 0 :
    $scope.shot++;
  };

  $scope.switch = (input) => {
    $rootScope.app = appFact.apps[input];
  }
});
