angular.module('appFact', [])
.factory('appFact', function (homeFact) {
  const apps = {};

  apps.breadcrumb = {
    name: 'Breadcrumb',
    logo: '../assets/breadcrumb/logo.png',
    screenshots: [
      '../assets/breadcrumb/logo-color.png',
      '../assets/breadcrumb/s1.png',
      '../assets/breadcrumb/s2.png',
      '../assets/breadcrumb/s3.png',
      '../assets/breadcrumb/s4.png',
      '../assets/breadcrumb/s5.png',
    ],
    elevator: 'You’re just a few taps away from an exciting adventure',
    description: 'In Breadcrumb the user is navigated to \'crumbs\' along a trail of their choosing. At each crumb the user is presented with various media left by the creator of the trail, or \'crumblayer\'. Crumb media can be anything from text, images, or even augmented reality! This allows the crumblayer to craft unique trails, using videos, sounds, or virtual drawing to provide the client with an interactive experience. This benefits multiple business avenues like the tourism industry, local musicians, theatre troupes, or even a user who wants to provide a romantic memory for their significant other.',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
      'Ionic',
      'Cordova',
      'ezAR',
      'Auth0',
      'Nodal',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Waffle',
      'Travic CI',
    ],
    attributes: [
      'One page app',
      'Social media login',
      'Google Maps API',
      'Leaflet API',
      'Cloudinary image hosting'
    ],
    github: 'https://github.com/real-DEAL/Breadcrumb',
    live: 'http://breadcrumb.real-deal.studio',
  };

  apps.spurr = {
    name: 'Spurr',
    logo: '../assets/spurr/logo.png',
    screenshots: [
      '../assets/spurr/logo-color.png',
      '../assets/spurr/s1.png',
      '../assets/spurr/s2.png',
      // '../assets/spurr/s3.png',
      // '../assets/spurr/s4.png',
      // '../assets/spurr/s5.png',
    ],
    elevator: 'Your personal PostSecret',
    description: 'Combining Snapchat with PostSecret, Spurr produces a cathartic release of stress and a rush of excitement. Release your tense thoughts while indulging in gossip! Send a secret, get a secret. Get something off your chest by sending it into our ether, then enjoy a secret from someone else sent only to you! Spurr creates an outlet that combines the therapeutic act of revealing secrets with the enjoyment obtained from hearing secrets.',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
      'NodeJS',
      'Express',
      'MySQL',
    ],
    attributes: [
      'Single page app',
      'Getty Images API',
    ],
    github: 'https://github.com/Spurr-App/Spurr-App',
    live: 'http://spurr.real-deal.studio',
  };

  apps.whatsHappenin = {
    name: 'What\'s Happenin\'',
    logo: '../assets/whatsHappenin/logo.png',
    screenshots: [
      '../assets/whatsHappenin/logo-color.png',
      '../assets/whatsHappenin/s1.png',
      '../assets/whatsHappenin/s2.png',
      '../assets/whatsHappenin/s3.png',
      // '../assets/whatsHappenin/s4.png',
      // '../assets/whatsHappenin/s5.png',
    ],
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'Material UI',
      'Passport',
      'Heroku',
    ],
    attributes: [
      'Google Maps API',
      'Tinypic plugin',
    ],
    github: 'https://github.com/DeFieldsEPeriou/refactoredGreenfields',
    live: 'http://whatshappenin.real-deal.studio',
  };

  apps.fireEmblem = {
    name: 'Fire Emblem Arena',
    logo: null,
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    attributes: [

    ],
    github: 'https://github.com/defields/',
    live: 'http://fea.real-deal.studio',
  };

  apps.globalPray = {
    name: 'Global Pray',
    logo: null,
    elevator: '',
    description: '',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    github: 'https://github.com/defields/',
    live: 'http://global-pray.real-deal.studio',
  };

  apps.cookbook = {
    name: 'Cookbook',
    logo: null,
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    github: 'https://github.com/defields/',
    live: 'http://cookbook.real-deal.studio',
  };

  apps.logoer = {
    name: 'Logoer',
    logo: null,
    screenshots: [
      '../assets/whatsHappenin/logo-color.png',
      '../assets/whatsHappenin/s1.png',
      '../assets/whatsHappenin/s2.png',
      '../assets/whatsHappenin/s3.png',
      // '../assets/whatsHappenin/s4.png',
      // '../assets/whatsHappenin/s5.png',
    ],
    elevator: 'Create your ideal logo in a few clicks',
    description: '',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
    ],
    attributes: [
      'One page app',
      'SVG images',
    ],
    github: 'https://github.com/livrush/logoer',
    live: 'http://logoer.real-deal.studio',
  };

  const keys = Object.keys(apps);

  return {
    apps,
    keys,
  }
});
