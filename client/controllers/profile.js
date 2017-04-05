angular.module('profileCtrl', [])
.controller('profileCtrl', function ($scope, profileFact) {
  $scope.test = (input) => { console.warn('profile') };

  $scope.style = null;

  $scope.person = null;

  $scope.switch = (name) => {
    $scope.person = profileFact.dev(name);
    $scope.style = $scope.person.style;
  }

  $scope.switch('alice');
});
