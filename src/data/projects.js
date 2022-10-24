const projects = [
    {
        id: 1,
        tags: ['PL'],
        name: 'Megazeen',
        title: {
            en: 'Sales managment website',
            pl: 'Strona do zarządzania sprzedażą',
        },
        subtitle: {
            en: 'Website for managing an online store’s sales. Made to work nicely with Allegro but fee rates are customizable. Keep track of your stock and log sales. Get estimated profits and detailed statistics. <ul> <li>React front-end with Laravel back-end</li> <li>PDF statements with js-pdf</li> </ul>',
            pl: 'Strona do zarządzania sprzedażą sklepu internetowego. Stworzona do działania z Allegro, ale stawki opłat są edytowalne. Możliwość śledzenia zasobów oraz notowania sprzedaży. Uzyskaj szacunkowe zyski i szczegółowe statystyki. <ul> <li>React front-end z Laravel back-end</li> <li>Wyciągi PDF z js-pdf</li> </ul>',
        },
        description: {
            technical: {
                en: '<ul> <li>React frontend</li><li>Laravel backend</li><li>MySQL</li><li>Laravel Sanctum user authentication</li></ul>',
                pl: '<ul> <li>React frontend</li><li>Laravel backend</li><li>MySQL</li><li>Laravel Sanctum user authentication</li></ul>',
            },
            additional: {
                en: {
                    languages: ['Polish'],
                    platforms: ['web'],
                    categories: ['business', 'management', 'finance'],
                },
                pl: {
                    languages: ['polski'],
                    platforms: ['web'],
                    categories: ['biznes', 'zarządzanie', 'finanse'],
                },
            },
        },
        technologies: ['React', 'Laravel', 'SQL', 'jsPDF', 'Chart.js'],
        image: '/imgs/megazeen.png',
        colors: {
            primary: '#A2CEF9',
            lighter: '#ABD6FF',
            darker: '#0E2439',
        },
        url: 'https://github.com/jacqouese/Megazeen',
        videoRadius: 10,
    },
    // {
    //     id: 2,
    //     tags: ['PL'],
    //     name: 'Linguesia',
    //     title: {
    //         en: 'Language learning mobile app',
    //         pl: 'Aplikacja mobilna do nauki języków',
    //     },
    //     subtitle: {
    //         en: 'Learn German with the help of flashcards. Abbility to <br /> learn verbs, word genders, irregular verbs. <ul> <li>Cross platform with React Native</li> <li>Laravel API for storing flashcards</li> <li>SQLite for storing progress</li> </ul>',
    //         pl: 'Ucz się niemieckiego za pomocą fiszek. Możliwość uczenia się czasowników, rodzajników wyrazów, czasowników nieregularnych. <ul> <li>Międzyplatformowa z React Native</li> <li>API Laravel do przechowywania fiszek</li> <li>SQLite do przechowywania postępu</li> </ul>',
    //     },
    //     description: {
    //         technical: {
    //             en: '<ul> <li>React Native with TypeScript</li><li>Animations with React Native Animated and react-native-animatable</li><li>SQLite and AsyncStorage for on-device storage faster loading and limiting API usage</li><li>Laravel API with an admin panel for storing flashcards and pushing new content to user devices</li></ul>',
    //             pl: '<ul> <li>React Native z TypeScript</li><li>Animacje z bibliotekami React Native Animated i react-native-animatable</li><li>SQLite dla szybszego ładowania oraz ograniczenia zapytań do API</li><li>Laravel API z panelem admina do przechowywania fiszek i przesyłania danych do użytkownika</li></ul>',
    //         },
    //         additional: {
    //             en: {
    //                 languages: ['Polish'],
    //                 platforms: ['iOS'],
    //                 categories: ['education', 'language'],
    //             },
    //             pl: {
    //                 languages: ['polski'],
    //                 platforms: ['iOS'],
    //                 categories: ['edukacja', 'język'],
    //             },
    //         },
    //     },
    //     technologies: ['React Native', 'Laravel API', 'SQL', 'SQLite'],
    //     image: '/imgs/linguesia.png',
    //     colors: {
    //         primary: '#A4F0CF',
    //         lighter: '#C1FFE4',
    //         darker: '#0E422B',
    //     },
    //     url: 'https://github.com/jacqouese/Linguesia',
    //     videoRadius: 34,
    // },
    {
        id: 3,
        tags: ['PL'],
        name: 'YouTube Screen Time',
        title: {
            en: 'Chrome extension for tracking screen time',
            pl: 'Rozszerzenie Chrome do YouTube',
        },
        subtitle: {
            en: 'Track your time spend on YouTube. See exactly how much time you spend on watching certain categories. Set limits on category basis. <ul> <li>Built in vanilla JavaScript</li> <li>IndexedDB for storing data</li> <li>Ability to restrict time for a specific category</li> </ul>',
            pl: 'Śledź swój czas spędzony w YouTube. Zobacz dokładnie, ile czasu spędzasz na oglądaniu określonych kategorii. Ustaw limity na podstawie kategorii. <ul> <li>Napisane w vanilla JavaScript</li> <li>IndexedDB do przechowywania danych</li> <li>Możliwość ograniczenia czasu dla określonej kategorii</li> </ul>',
        },
        description: {
            technical: {
                en: '<ul> <li>Vanilla JavaScript with Gulp</li><li>HTML templating with gulp-file-include</li><li>Chrome message passing integration</li><li>IndexedDB and localStorage for storing data</li></ul>',
                pl: '<ul> <li>Vanilla JavaScript z Gulp</li><li>Szablony HTML z gulp-file-include</li><li>Integracja Chrome message passing</li><li>IndexedDB i localStorage do przechowywania danych</li></ul>',
            },
            additional: {
                en: {
                    languages: ['English'],
                    platforms: ['Chrome'],
                    categories: ['statistics', 'entertainment'],
                },
                pl: {
                    languages: ['angielski'],
                    platforms: ['Chrome'],
                    categories: ['statystyki', 'rozrywka'],
                },
            },
        },
        technologies: ['Browser', 'VanilaJS', 'IndexedDB'],
        image: '/imgs/youtube.png',
        colors: {
            primary: '#FFD6B0',
            lighter: '#FFDEBF',
            darker: '#301904',
        },
        url: 'https://github.com/jacqouese/YouTubeScreenTime',
        videoRadius: 10,
    },
    {
        id: 4,
        tags: ['PL'],
        name: 'TablerPlus',
        title: {
            en: 'Work schedule generator',
            pl: 'Generator grafików pracy',
        },
        subtitle: {
            en: 'Electron applicaton for generating work schedules in a three-shift format <ul> <li>GUI made in Electron with React</li> <li>Intuitive PDF schedule generation</li> <li>Ability to adjust colors and styles</li> </ul>',
            pl: 'Aplikacja Electron do generowania harmonogramów pracy w formacie trzyzmianowym <ul> <li>GUI wykonane w Electron z React</li> <li>Intuicyjne generowanie harmonogramów PDF</li> <li>Możliwość dostosowania kolorów i stylów</ li> </ul>',
        },
        description: {
            technical: {
                en: '<ul> <li>PDFs created with jsPDF</li><li>GUI made in Electron with React</li><li>LocalStorage used for storing nonsensitive user data</li></ul>',
                pl: '<ul> <li>PDFy generowane z jsPDF</li><li>GUI w Electron z React</li><li>LocalStorage do przechowywania danych</li></ul>',
            },
            additional: {
                en: {
                    languages: ['Polish'],
                    platforms: ['MacOS'],
                    categories: ['productivity', 'managment'],
                },
                pl: {
                    languages: ['polski'],
                    platforms: ['MacOS'],
                    categories: ['produktywność', 'zarządzanie'],
                },
            },
        },
        technologies: ['Electron', 'React', 'jsPDF'],
        image: '/imgs/tablerplus.png',
        colors: {
            primary: '#CDF0F3',
            lighter: '#E2FDFF',
            darker: '#082E31',
        },
        url: 'https://github.com/jacqouese/TablerPlus',
        videoRadius: 10,
    },
    {
        id: 5,
        tags: ['PL'],
        name: 'KołobrzegHotele',
        title: {
            en: 'Accomodation search website',
            pl: 'Strona do szukania noclegów',
        },
        subtitle: {
            en: 'Accommodation search for tourists in Kolobrzeg. Find your perfect stay by selecting the importance of certain places to you. Website build in a team of two with Laravel for a competition. <ul> <li>3 languages handled with Laravel Localization</li> <li>Data sourced from city’s open API</li> <li>Bing maps integration</li> </ul>',
            pl: 'Wyszukiwarka noclegów dla turystów w Kołobrzegu. Znajdź swój idealny pobyt dzięki zaawansowanemu filtrowi wyszukiwań. Strona internetowa zbudowana w dwuosobowym zespole w Laravel na konkurs. <ul> <li>3 języki obsługiwane przez Laravel localization</li> <li>Dane pozyskiwane z otwartego API miasta</li> <li>Integracja map Bing</li> </ul>',
        },
        description: {
            technical: {
                en: '<ul> <li>Laravel website with Blade template engine</li><li>JavaScript for page animations</li><li>Data sourced from city’s open API</li><li>Bing maps integration</li></ul> <br /> <p style="color: red;">The API utilized by the website has sadly been shut down</p>',
                pl: '<ul> <li>Laravel z Blade template engine</li><li>Przejścia i animacje w JavaScript</li><li>Dane pozyskiwane z otwartego API miasta</li><li>Integracja map Bing</li></ul> <br /> <p style="color: red;">API używane przez stronę zostało wyłączone</p>',
            },
            additional: {
                en: {
                    languages: ['Polish', 'English', 'German'],
                    platforms: ['web'],
                    categories: ['travel'],
                },
                pl: {
                    languages: ['polski', 'angielski', 'niemiecki'],
                    platforms: ['web'],
                    categories: ['podróże'],
                },
            },
        },
        technologies: ['Laravel', 'VanillaJS', 'External API', 'Bing Maps'],
        image: '/imgs/hotels.png',
        colors: {
            primary: '#DBDBDB',
            lighter: '#EBEBEB',
            darker: '#021B1E',
        },
        url: 'https://github.com/jacqouese/project-k',
        videoRadius: 10,
    },
];

export default projects;
