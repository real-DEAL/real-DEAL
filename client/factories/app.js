angular.module('appFact', [])
.factory('appFact', function () {
  const techs = {
    HTML: [
      'HTML',
      'https://developer.mozilla.org/en-US/docs/Web/HTML',
    ],
    CSS: [
      'CSS',
      'https://developer.mozilla.org/en-US/docs/Web/CSS',
    ],
    JavaScript: [
      'Javascript',
      'https://www.javascript.com/',
    ],
    AngularJS: [
      'AngularJS',
      'https://angularjs.org/',
    ],
    Ionic: [
      'Ionic',
      'https://ionicframework.com/',
    ],
    Cordova: [
      'Cordova',
      'https://cordova.apache.org/',
    ],
    ezAR: [
      'ezAR',
      'https://www.ezartech.com/',
    ],
    Auth0: [
      'Auth0',
      'https://auth0.com/',
    ],
    Nodal: [
      'Nodal',
      'http://www.nodaljs.com/',
    ],
    PostgreSQL: [
      'PostgreSQL',
      'https://www.postgresql.org/',
    ],
    AWS: [
      'AWS',
      'https://aws.amazon.com/',
    ],
    Docker: [
      'Docker',
      'https://hub.docker.com',
    ],
    Waffle: [
      'Waffle',
      'https://waffle.io/',
    ],
    Travis: [
      'Travic CI',
      'travis-ci.org',
    ],
    NodeJS: [
      'NodeJS',
      'https://nodejs.org/en/',
    ],
    Express: [
      'Express',
      'https://expressjs.com/',
    ],
    MySQL: [
      'MySQL',
      'https://www.mysql.com/',
    ],
    React: [
      'React',
      'https://facebook.github.io/react/',
    ],
    MaterialUI: [
      'Material UI',
      'http://www.material-ui.com/',
    ],
    Passport: [
      'Passport',
      'http://passportjs.org/',
    ],
    Heroku: [
      'Heroku',
      'https://dashboard.heroku.com/',
    ],
  };



  const apps = {};

  apps.breadcrumb = {
    name: 'Breadcrumb',
    logo: '../assets/breadcrumb/logo.png',
    logoColor: '../assets/breadcrumb/logo-color.png',
    screenshots: [
      '../assets/breadcrumb/s2.png',
      '../assets/breadcrumb/s3.png',
      '../assets/breadcrumb/s4.png',
      '../assets/breadcrumb/s5.png',
      '../assets/breadcrumb/s1.png',
    ],
    elevator: 'You’re just a few taps away from an exciting adventure',
    description: 'In Breadcrumb the user is navigated to \'crumbs\' along a trail of their choosing. At each crumb the user is presented with various media left by the creator of the trail, or \'crumblayer\'. Crumb media can be anything from text, images, or even augmented reality! This allows the crumblayer to craft unique trails, using videos, sounds, or virtual drawing to provide the client with an interactive experience. This benefits multiple business avenues like the tourism industry, local musicians, theatre troupes, or even a user who wants to provide a romantic memory for their significant other.',
    techStack: [
      techs.HTML,
      techs.CSS,
      techs.JavaScript,
      techs.AngularJS,
      techs.Ionic,
      techs.Cordova,
      techs.ezAR,
      techs.Auth0,
      techs.Nodal,
      techs.PostgreSQL,
      techs.AWS,
      techs.Docker,
      techs.Waffle,
      techs.Travis,
    ],
    attributes: [
      // [
      //   'One page app',
      //   '',
      // ],
      [
        'Augmented reality',
        'Combined ezAR, camera, gyroscope, accelerometer, compass to display messages on camera at specific coordinates'
      ],
      [
        'Social media connection',
        'One click log in/sign up for Facebook and Twitter',
      ],
      [
        'Google Maps API',
        'Provides users a map of their full trails',
      ],
      [
        'Leaflet API',
        'Allows multiple dynamic maps to be used on one page simultaneously',
      ],
      [
        'Cloudinary image hosting',
        'Serves as our image hosting service',
      ],
    ],
    github: 'https://github.com/real-DEAL/Breadcrumb',
    live: 'http://breadcrumb.real-deal.studio',
  };

  apps.spurr = {
    name: 'Spurr',
    logo: '../assets/spurr/logo.png',
    logoColor: '../assets/spurr/logo-color.png',
    screenshots: [
      '../assets/spurr/s2.png',
      '../assets/spurr/s3.png',
      '../assets/spurr/s4.png',
      '../assets/spurr/s5.png',
      '../assets/spurr/s1.png',
    ],
    elevator: 'Your personal PostSecret',
    description: 'Combining Snapchat with PostSecret, Spurr produces a cathartic release of stress and a rush of excitement. Release your tense thoughts while indulging in gossip! Send a secret, get a secret. Get something off your chest by sending it into our ether, then enjoy a secret from someone else sent only to you! Spurr creates an outlet that combines the therapeutic act of revealing secrets with the enjoyment obtained from hearing secrets.',
    techStack: [
      techs.HTML,
      techs.CSS,
      techs.JavaScript,
      techs.AngularJS,
      techs.AWS,
      techs.NodeJS,
      techs.Express,
      techs.MySQL,
      techs.Waffle,
    ],
    attributes: [
      [
        'Getty Images API',
        'Access to large library of searchable images to provide a variety of background options',
      ],
      [
        'Incredible font library',
        'Used Web Font Loader to acquire a large selection of fonts to and increase visual variety',
      ],
      [
        'Social media connection',
        'Facebook and Twitter share buttons so data can be populated for entertainment and advertisement',
      ],
    ],
    github: 'https://github.com/Spurr-App/Spurr-App',
    live: 'http://spurr.real-deal.studio',
  };

  apps.whatsHappenin = {
    name: 'What\'s Happenin\'',
    logo: '../assets/whatsHappenin/logo.png',
    logoColor: '../assets/whatsHappenin/logo-color.png',
    screenshots: [
      '../assets/whatsHappenin/s2.png',
      '../assets/whatsHappenin/s3.png',
      '../assets/whatsHappenin/s1.png',
    ],
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    techStack: [
      techs.HTML,
      techs.CSS,
      techs.JavaScript,
      techs.React,
      techs.MaterialUI,
      techs.Passport,
      techs.Heroku,
    ],
    attributes: [
      [
        'Google Maps API',
        'Implemented Google Maps through React-Gmaps for its accessibility, ease of use, alterability, and familiarity',
      ],
      [
        'Google Calendars API',
        'Integrated Google Calendars for easy auto-population of fields and insertion of data into calendar',
      ],
      [
        'Tinypic plugin',
        'Supports local image uploads directly in the app',
      ],
    ],
    github: 'https://github.com/DeFieldsEPeriou/refactoredGreenfields',
    live: 'http://whatshappenin.real-deal.studio',
  };

  apps.fireEmblem = {
    name: 'Fire Emblem Arena',
    logo: null,
    screenshots: [],
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'AngularJS',
    ],
    attributes: [

    ],
    github: 'https://github.com/defields/',
    live: 'http://fea.real-deal.studio',
  };

  apps.globalPray = {
    name: 'Global Pray',
    logo: null,
    screenshots: [],
    elevator: '',
    description: '',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'AngularJS',
    ],
    github: 'https://github.com/defields/',
    live: 'http://global-pray.real-deal.studio',
  };

  apps.cookbook = {
    name: 'Cookbook',
    logo: null,
    screenshots: [],
    elevator: 'Find out what\'s happenin\' around you',
    description: 'Are you bored? Got a few free hours to play a pickup game? Want to find the best happy hours in the city? What\'s Happenin\' lets you know exactly what\'s happein\' around you right now! Find nearby events, or create your own. You\'ll never be bored again now that you know What\'s Happenin\'!',
    attributes: [
      'HTML',
      'CSS',
      'Javascript',
      'AngularJS',
    ],
    github: 'https://github.com/defields/',
    live: 'http://cookbook.real-deal.studio',
  };

  apps.logoer = {
    name: 'Logoer',
    logo: null,
    screenshots: [],
    elevator: 'Create your ideal logo in a few clicks',
    description: '',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'AngularJS',
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
