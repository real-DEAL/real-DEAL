angular.module('profileCtrl', [])
.controller('profileCtrl', function ($scope, $rootScope, profileFact, $stateParams) {
  $scope.devs = [
    'Alice',
    'Devin',
    'Eric',
    'Olivia',
  ];

  $scope.switch = (name) => {
    $rootScope.person = profileFact.dev(name);
    $rootScope.style = $scope.person.style;
  };

  if ($stateParams.id < 4) $scope.switch($scope.devs[$stateParams.id]);
});
