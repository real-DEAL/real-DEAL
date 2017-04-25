angular.module('Portfolio', [
  'appCtrl',
  'appFact',
  'profileCtrl',
  'profileFact',
  'ui.router',
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'homeCtrl',
      resolve: {
        app: function(appFact) { return null },
      },
    })
    .state('apps', {
      url: '/apps',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return null },
      },
    })
    .state('profile', {
      url: '/profile?id',
      templateUrl: '../views/profile.html',
      controller: 'profileCtrl',
    })
    .state('Breadcrumb', {
      url: '/Breadcrumb',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return appFact.apps.breadcrumb },
      },
    })
    .state('Spurr', {
      url: '/Spurr',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return appFact.apps.spurr },
      },
    })
    .state('What\'s Happenin\'', {
      url: '/What\'s Happenin\'',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return appFact.apps.whatsHappenin },
      },
    })
    .state('Fire Emblem Arena', {
      url: '/Fire Emblem Arena',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return appFact.apps.fireEmblem },
      },
    })
    .state('Cookbook', {
      url: '/Cookbook',
      templateUrl: '../views/apps.html',
      controller: 'appCtrl',
      resolve: {
        app: function(appFact) { return appFact.apps.cookbook },
      },
    });

  $urlRouterProvider.otherwise('/home');
})
.factory('homeFact', function ($window) {
  const colors = {
    orange: '#ff7d00',
    aqua: '#3bbbb2',
    purple: '#9d30ac',
    green: '#39c366',
  }

  return colors;
})
.controller('homeCtrl', function ($scope, $rootScope, homeFact, appFact, profileFact) {
  const name = () => profileFact.keys[Math.floor(Math.random() * 4)];

  $scope.test = (input) => { console.warn(input) };

  console.log($scope, $rootScope);

  $scope.devs = profileFact.devs;

  $rootScope.person = profileFact.dev(name());

  $rootScope.style = $rootScope.person.style;
});
