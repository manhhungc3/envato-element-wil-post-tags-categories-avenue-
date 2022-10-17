import { Data } from "../typegen";

export const data: Data = {
  general: {
    variant: "variant1",
    listTerms: {
      items: [
        {
          count: 1,
          name: 'hom nay la thu 2',
          slug: 'name1',
          term_id: 2,
        },
        {
          count: 2,
          name: 'hom nay la thu 3',
          slug: 'name2',
          term_id: 3,
        }
      ]
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
