
export const ListadoRestaurantes = [
    'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1024x572.png',
    'https://brandemia.org/contenido/subidas/2021/12/bk_rebrand_stills_vi_1_logo.jpg',
    'https://static.vecteezy.com/system/resources/previews/024/693/620/original/kfc-logo-transparent-free-png.png',
  ]; 

export const ListadoShows = [
  {
    type: 'show',
    key: 'show1',
    image: require('../assets/show1.jpg'),
    text: 'Show 1',
    menu: [
    ]
  },
  {
    type: 'show',
    key: 'show2',
    image: require('../assets/show2.jpg'),
    text: 'Show 2',
    menu: [
    ]
  },
  {
    type: 'show',
    key: 'show3',
    image: require('../assets/show3.jpg'),
    text: 'Show 3',
    menu: [
    ]
  },
  {
    type: 'show',
    key: 'show4',
    image: require('../assets/show4.jpg'),
    text: 'Show 3¿4',
    menu: [
    ]
  },
  {
    type: 'show',
    key: 'show5',
    image: require('../assets/show5.jpg'),
    text: 'Show 5',
    menu: [
    ]
  }
  
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
    type: 'restaurant',
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
    type: 'restaurant',
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
    type: 'restaurant',
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
  },
  {
    type: 'restaurant',
    key: 'wendys',
    image: require('../assets/Wendys.png'),
    text: 'Wendys',
    menu: [
      {key: "Nuggets de pollo"},
      {key: "Pollo frito"},
      {key: "Balde de patitas"},
      {key: "Balde de alitas"},
      {key: "Balde de papas"}
    ]
  }
]
