angular.module('profileCtrl', [])
.controller('profileCtrl', function ($scope, profileFact) {
  $scope.style = null;

  $scope.devs = [
    'Alice',
    'Devin',
    'Eric',
    'Olivia',
  ];

  $scope.person = null;

  $scope.switch = (name) => {
    $scope.person = profileFact.dev(name);
    $scope.style = $scope.person.style;
  };

  $scope.switch('Alice');
});
