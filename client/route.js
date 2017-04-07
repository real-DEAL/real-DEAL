const router = function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../views/home.html',
      controller: 'homeCtrl',
    })
    .when('/apps', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
    })
    .when('/profile', {
      templateUrl: '../views/profile.html',
      controller: 'profileCtrl',
    })
    .when('/Breadcrumb', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
    })
    .when('/Spurr', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
    })
    .when('/What\'s Happenin\'', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
    })
    .when('/Cookbook', {
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
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
.controller('homeCtrl', function ($scope, $rootScope, homeFact, appFact, profileFact) {
  const name = () => profileFact.keys[Math.floor(Math.random() * 4)];

  $scope.test = (input) => { console.warn(input) };

  console.log($scope, $rootScope);

  // $rootScope.app = appFact.apps.spurr;

  $rootScope.person = profileFact.dev(name());

  $rootScope.style = $rootScope.person.style;
});
