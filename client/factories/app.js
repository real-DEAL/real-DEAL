angular.module('appFact', [])
.factory('appFact', function (homeFact) {
  const apps = {};

  apps.breadcrumb = {
    name: 'Breadcrumb',
    img: '../assets/breadcrumb/logo.png',
    screenshots: [
      '../assets/breadcrumb/s1.png',
      '../assets/breadcrumb/s2.png',
      '../assets/breadcrumb/s3.png',
      '../assets/breadcrumb/s4.png',
      '../assets/breadcrumb/s5.png',
    ],
    elevator: 'You’re just a few taps away from an exciting adventure',
    description: 'The user is navigated to \'crumbs\' along a trail of their choosing. At each crumb the user is presented with various media left by the creator of the trail, or \'crumblayer\'. Crumb media can be anything from text, images, or even augmented reality! This allows the crumblayer to craft unique trails, using videos, sounds, or virtual drawing to provide the client with an interactive experience. This benefits multiple business avenues like the tourism industry, local musicians, theatre troupes, or even a user who wants to provide a romantic memory for their significant other.',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
      'AWS',
      'Docker'
    ],
    attributes: [
      'One page app',
      'Social media login',
    ],
    github: 'https://github.com/real-DEAL/Breadcrumb',
    style: {
      'background-color': homeFact.purple,
    },
  };

  apps.spurr = {
    name: 'Spurr',
    img: '../assets/spurr/logo.png',
    elevator: 'Your personal PostSecret',
    description: 'Combining Snapchat with PostSecret, Spurr produces a cathartic release of stress and a rush of excitement. Release your tense thoughts while indulging in gossip! Send a secret, get a secret. Get something off your chest by sending it into our ether, then enjoy a secret from someone else sent only to you! Spurr creates an outlet that combines the therapeutic act of revealing secrets with the enjoyment obtained from hearing secrets.',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    attributes: [

    ],
    github: 'https://github.com/Spurr-App/Spurr-App',
    style: {
      'background-color': homeFact.orange,
    },
  };

  apps.whatsHappenin = {
    name: 'Breadcrumb',
    img: '../assets/logowh.png',
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
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

  const keys = Object.keys(apps);

  return {
    apps,
    keys,
  }
});
