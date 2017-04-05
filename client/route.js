const router = function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../views/home.html',
      controller: 'homeCtrl',
      authenticate: true,
    })
    .when('/apps', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      authenticate: true,
    })
    .when('/profile', {
      templateUrl: '../views/profile.html',
      controller: 'profileCtrl',
      authenticate: true,
    })
    .otherwise({
      redirectTo: '/home',
    });
};

angular.module('Portfolio', [
  'appCtrl',
  'appFact',
  'profileCtrl',
  'profileFact',
  'ngRoute',
])
.config(router)
.factory('homeFact', function ($window) {
  const orange = '#ff7d00';
  const aqua = '#3bbbb2'
  const purple = '#9d30ac'
  const green = '#39c366'

  return {
    orange, aqua, purple, green,
  }
})
.controller('homeCtrl', function ($scope) {
  $scope.test = (input) => { console.warn(input) };
})
;
