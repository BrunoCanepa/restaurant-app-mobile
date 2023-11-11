
export const ListadoRestaurantes = [
    'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1024x572.png',
    'https://brandemia.org/contenido/subidas/2021/12/bk_rebrand_stills_vi_1_logo.jpg',
    'https://static.vecteezy.com/system/resources/previews/024/693/620/original/kfc-logo-transparent-free-png.png',
  ]; 

export const ListadoShows = [
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/next-party-banner-design-template-aec806778f544b35aead11938d164d4c_screen.jpg?ts=1637052273",
    "https://img.freepik.com/psd-premium/festival-carnaval-banner-portugues-no-brasil-render-3d-espectaculo-evento-diseno-plantilla-realista_363450-2146.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/night-party-flyer-design-template-425d1866998f7f54a793a7b3348bbaa4.jpg?ts=1641177421",
  
  ];

export const ListadoData= [
    "McDonalds",
    "Burguer King",
    "Kentaki Fried Chicken"
  ];
  
export const ListadoIconos = [
    { name: "mcdonalds", uri: require("../assets/McDonalds.png") },
    { name: "burguerking", uri: require("../assets/BurguerKing.png") },
    { name: "kfc", uri: require("../assets/KFC.png") },
  ];

export const ListadoDetalles = [
  {
    key: 'mcdonalds',
    image: require('../assets/McDonalds.png'),
    text: 'McDonalds',
    menu: [
      {key: "Doble cuarto"},
      {key: "Cuarto de libra"},
      {key: "Hamburguesa con queso"},
      {key: "Big Mac"}
    ]
  },
  {
    key: 'burguerking',
    image: require('../assets/BurguerKing.png'),
    text: 'BurguerKing',
    menu: [
      {key: "Hamburguesa con queso"},
      {key: "Whopper"},
      {key: "Whopper vegetariana"},
      {key: "Mega Whopper"},
      {key: "Wrap"},
      {key: "Balde de aros"}
    ]
  },
  {
    key: 'kfc',
    image: require('../assets/KFC.png'),
    text: 'KFC',
    menu: [
      {key: "Nuggets de pollo"},
      {key: "Pollo frito"},
      {key: "Balde de patitas"},
      {key: "Balde de alitas"},
      {key: "Balde de papas"}
    ]
  }
]
