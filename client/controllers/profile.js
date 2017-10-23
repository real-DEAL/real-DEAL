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

  $scope.toggleStyle = () => {
    $('.styles.open').length ? $('.styles.open').removeClass('open') : $('.styles').addClass('open');
  };

  if ($stateParams.id < 4 && $stateParams.id > -1) $scope.switch($scope.devs[$stateParams.id]);
});
