const projects = [
  {
    id: 1,
    tags: ['PL'],
    name: 'Megazeen',
    title: 'Sales managment website',
    subtitle:
      'Website for managing an online store’s sales. Made to work nicely with Allegro but fee rates are customizable. Keep track of your stock and log sales. Get estimated profits and detailed statistics. <ul> <li>React front-end with Laravel back-end</li> <li>PDF statements with js-pdf</li> </ul>',
    technologies: ['React', 'Laravel', 'SQL'],
    image: '/imgs/megazeen.png',
    colors: {
      primary: '#00252D',
      lighter: '#00303C',
      darker: '#00181E',
    },
    url: 'https://github.com/jacqouese/ProjectC',
  },
  {
    id: 2,
    tags: ['PL'],
    name: 'Linguesia',
    title: 'language learning mobile app',
    subtitle:
      'Learn German with the help of flashcards. Abbility to learn verbs, word genders, irregular verbs. <ul> <li>Cross platform with React Native</li> <li>Laravel API for storing flashcards</li> <li>SQLite for storing progress</li> </ul>',
    technologies: ['React Native', 'Laravel API', 'SQL', 'SQLite'],
    image: '/imgs/linguesia.png',
    colors: {
      primary: '#2A2D37',
      lighter: '#363A46',
      darker: '#1B1F2B',
    },
    url: 'https://github.com/jacqouese/Linguesia',
  },
  {
    id: 3,
    tags: ['PL'],
    name: 'YouTube Screen Time',
    title: 'Chrome extension for tracking screen time',
    subtitle:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sed aspernatur? Exercitationem illum numquam sapiente, molestias dolores quidem dicta eum harum sit voluptates a provident natus corporis vitae ipsam eaque.',
    technologies: ['Browser', 'VanilaJS', 'IndexedDB'],
    image: '/imgs/youtube.png',
    colors: {
      primary: '#003647',
      lighter: '#004358',
      darker: '#001C25',
    },
    url: 'https://github.com/jacqouese/YouTubeScreenTime',
  },
];

export default projects;
