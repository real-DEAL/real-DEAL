angular.module('profileCtrl', [])
.controller('profileCtrl', function ($scope, $rootScope, profileFact) {
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
});
