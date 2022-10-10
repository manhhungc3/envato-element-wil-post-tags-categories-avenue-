import { Data } from "../typegen";

export const data: Data = {
  general: {
    variant: "variant1",
    imageRadius: 0,
    aspectRatio: '',
    content: [
      {
        image: '../img/1.png',
        title: 'Activewear',
        link: 'https://www.youtube.com/',
      },
      {
        image: '../img/2.png',
        title: 'Sweatshirts',
        link: '',
      },
      {
        image: '../img/3.png',
        title: 'Coats & Jackets',
        link: '',
      },
      {
        image: '../img/4.png',
        title: 'Dresses',
        link: '',
      },
      {
        image: '../img/1.png',
        title: 'Waistcoats',
        link: '',
      },
      {
        image: '../img/2.png',
        title: 'Jeans',
        link: '',
      },
      {
        image: '../img/3.png',
        title: 'Skirts & Tops',
        link: '',
      },
      {
        image: '../img/4.png',
        title: 'Swimsuits',
        link: '',
      }

    ]

  },
  typography: {
    titleTypo: '',
  },
  border: {
    enableBorder: false,
    borderItemWidth: 0,
    borderItemColor: '',
    borderItemStyle: '',
    borderItemRadius: 0,

  },
  responsive: {
    lg: 5,
    md: 3,
    sm: 2,
    xs: 1,
    gapLg: 40,
    gapMd: 40,
    gapSm: 40,
    gapXs: 40,
  },
  carousel: {
    enable: false,
    buttonEnable: true,
    paginationEnable: true,
    buttonColor: "#000",
  },
  colors: {
    primary: "",
    light: "",
    gray2: "",
    gray7: "",
    gray9: "",
  },
  customCSS: {
    code: "",
  }


};
