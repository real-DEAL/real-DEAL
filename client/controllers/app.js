angular.module('appCtrl', [])
.controller('appCtrl', function ($scope, appFact) {
  $scope.shot = 0;

  $scope.next = () => {
    $scope.shot === $scope.app.screenshots.length - 1 ?
    $scope.shot = 0 :
    $scope.shot++;
  };

  $scope.switch = (input) => appFact.apps[input];

  $scope.app = $scope.switch('breadcrumb');
});
