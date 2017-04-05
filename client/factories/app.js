angular.module('appFact', [])
.factory('appFact', function (homeFact) {
  const apps = {};

  apps.breadcrumb = {
    name: 'Breadcrumb',
    img: '../assets/logobc.png',
    elevator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    github: 'https://github.com/real-DEAL/Breadcrumb',
    style: {
      'background-color': homeFact.purple,
    },
  };

  apps.spurr = {
    name: 'Spurr',
    img: '../assets/logospurr.png',
    elevator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    github: 'https://github.com/Spurr-App/Spurr-App',
    style: {
      'background-color': homeFact.orange,
    },
  };

  apps.whatsHappenin = {
    name: 'Breadcrumb',
    img: '../assets/logowh.png',
    elevator: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    github: 'https://github.com/DeFieldsEPeriou/refactoredGreenfields',
    style: {
      'background-color': homeFact.green,
    },
  };

  return {
    apps,
  }
});
