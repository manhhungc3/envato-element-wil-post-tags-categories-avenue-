import { Data } from "../typegen";

export const data: Data = {
  general: {
    variant: "variant1",
    listTerms: {
      count: 1,
      name: 'home',
      slug: 'day',
      term_id: 2,
    }
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
