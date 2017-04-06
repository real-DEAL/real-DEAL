angular.module('profileFact', [])
.factory('profileFact', function (homeFact) {
  const devs = {};

  devs.Alice = {
    name1: 'Alice',
    name2: 'Lai',
    img: '../assets/hs-alice.png',
    bio: 'Born in New York City and raised in New Orleans, Alice has studied in Paris and worked in Hong Kong.  Having always had a passion for social innovation and having come from a social entrepreneurship background, she spent the last six months learning and building projects in JavaScript and its numerous frameworks/libraries such as Angular and React, as well as on Node. She hopes to make the world a better place through her newfound love for technological innovation. ',
    quote: 'Social entrepreneurs are not content just to give a fish or teach how to fish. They will not rest until they have revolutionized the fishing industry. -Bill Drayton',
    specialties: ['JavaScript', 'ES6', 'Angular', 'React', 'Nodal', 'SQL/NoSQL', 'Express', 'Ionic', 'Cordova', 'HTML', 'CSS'],
    projects: [
      'Global Pray',
      'Breadcrumb',
      'Spurr',
      'What\'s happenin\'',
    ].sort(),
    email: 'aplai168@gmail.com',
    github: 'http://www.github.com/aplai168',
    linkedin: 'https://www.linkedin.com/in/alice-lai/',
    color: homeFact.aqua,
    style: {
      'background-color': homeFact.aqua,
    },
  };

  devs.Devin = {
    name1: 'Devin',
    name2: 'Fields',
    img: '../assets/hs-devin.png',
    bio: 'Software engineer and spread operator enthusiast, I was trained in the art of JavaScripteuring--molded into a Greek marble statue, half HTML and half CSS--blessed by the gods of MV* frameworks and libraries. Conor McGregor once needed an application beaten into submission; he called me. Aside from that, I\'m a programmer with pro skills in JS and a large number of associated technologies. I have a creative background in music and writing, and I collect vinyl that I listen to while hugging my cat.',
    quote: '',
    specialties: [
      'JavaScript',
      'ES6',
      'Angular',
      'React',
      'Cordova',
      'Ionic',
      'HTML',
      'CSS',
      'Node',
      'Express',
      'SQL/NoSQL',
      'Bootstrap',
    ],
    projects: [
          'Fire Emblem Arena',
          'Breadcrumb',
          'Spurr',
          'What\'s happenin\'',
        ].sort(),
    email: 'defields923@gmail.com',
    github: 'http://www.github.com/defields923',
    linkedin: 'https://www.linkedin.com/in/defields923/',
    color: homeFact.green,
    style: {
      'background-color': homeFact.green,
    },
  };

  devs.Eric = {
    name1: 'Eric',
    name2: 'Periou',
    img: '../assets/hs-eric.png',
    bio: 'Eric grew up in Mandeville, Louisiana, and attended LSU, where he majored in Biological Engineering. He has always had an interest in coding, and decided to attend Code Bootcamp for training. He specializes in Back-end development, and rapid deployment with Docker, but has full stack capabilities. He has other interests outside coding, such as foot races, football, and cooking.',
    quote: 'If you don\'t know whats happening, you\'re just breaking it less.',
    specialties: ['NodalJS', 'Docker', 'React', 'Deployment'],
    projects: [
          'Cookbook',
          'Breadcrumb',
          'Spurr',
          'What\'s happenin\'',
        ].sort(),
    email: 'eperiou@yahoo.com',
    github: 'http://www.github.com/eperiou',
    linkedin: 'https://www.linkedin.com/in/eric-periou-404500a2/',
    color: homeFact.purple,
    style: {
      'background-color': homeFact.purple,
    },
  };

  devs.Olivia = {
    name1: 'Olivia',
    name2: 'Sabo-Rush',
    img: '../assets/hs-liv.png',
    bio: 'Originally from Woodinville, Washington, Liv has set up in New Orleans for the past two years. As a software engineer Liv excels at front end design, but is no stranger to server, database, and deployment. With 19 years of dance training, leading her to perform across four countries, Liv brings the best of the art world to the engineering world.',
    quote: 'I love crafting software that is not only functional but also beautiful and intuitive for the user.',
    specialties: [
      'HTML',
      'CSS',
      'Javascript',
      'Angular',
      'React',
      'UI',
      'UX',
      'Design',
    ],
    projects: [
      'Logoer',
      'Breadcrumb',
      'Spurr',
      'What\'s happenin\'',
    ].sort(),
    email: 'w.phrush@gmail.com',
    github: 'http://www.github.com/livrush',
    linkedin: 'https://www.linkedin.com/in/livrush',
    color: homeFact.orange,
    style: {
      'background-color': homeFact.orange,
    },
  };

  const keys = Object.keys(devs);

  const dev = (name) => devs[name];

  return {
    dev,
    keys,
  };
});
