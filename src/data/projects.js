const projects = [
  {
    id: 1,
    tags: ['PL'],
    name: 'Megazeen',
    title: 'Sales managment website',
    subtitle:
      'Website for managing an online store’s sales. Made to work nicely with Allegro but fee rates are customizable. Keep track of your stock and log sales. Get estimated profits and detailed statistics. <ul> <li>React front-end with Laravel back-end</li> <li>PDF statements with js-pdf</li> </ul>',
    technologies: ['React', 'Laravel', 'SQL', 'jsPDF'],
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
      'Track your time spend on YouTube. See exactly how much time you spend on watching certain categories. Set limits on category basis. <ul> <li>Built in vanilla JavaScript</li> <li>IndexedDB for storing data</li> <li>Ability to restrict time for a specific category</li> </ul>',
    technologies: ['Browser', 'VanilaJS', 'IndexedDB'],
    image: '/imgs/youtube.png',
    colors: {
      primary: '#003647',
      lighter: '#004358',
      darker: '#001C25',
    },
    url: 'https://github.com/jacqouese/YouTubeScreenTime',
  },
  {
    id: 4,
    tags: ['PL'],
    name: 'TablerPlus',
    title: 'Work schedule generator',
    subtitle:
      'Electron applicaton for generating work schedules in a three-shift format <ul> <li>GUI made in Electron with React</li> <li>Intuitive PDF schedule generation</li> <li>Ability to adjust colors and styles</li> </ul>',
    technologies: ['Electron', 'React', 'jsPDF'],
    image: '/imgs/tablerplus.png',
    colors: {
      primary: '#0C1D1F',
      lighter: '#132F32',
      darker: '#091213',
    },
    url: 'https://github.com/jacqouese/TablerPlus',
  },
  {
    id: 5,
    tags: ['PL'],
    name: 'KołobrzegHotele',
    title: 'Accomodation search website',
    subtitle:
      'Accomodation search for tourists in Kolobrzeg. Find your perfect stay by selecting the importance of certain places to you. Website build in a team of two with Laravel for a competition. <ul> <li>3 languages handled with Laravel Localization</li> <li>Data sourced from city’s open API</li> <li>Bing maps integration</li> </ul>',
    technologies: ['Laravel', 'VanillaJS', 'External API', 'Bing Maps'],
    image: '/imgs/hotels.png',
    colors: {
      primary: '#132E40',
      lighter: '#1C425B',
      darker: '#081620',
    },
    url: 'https://github.com/jacqouese/project-k',
  },
];

export default projects;
