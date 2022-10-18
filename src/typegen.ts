export type Data = {
general: {
variant: string;
listTerms: {
    term_id: number;
    name: string;
    slug: string;
    description?: string;
    count: number;
    featuredImage?: {
      small?: {
        src: string;
        width: number;
        height: number;
      };
      medium?: {
        src: string;
        width: number;
        height: number;
      };
      large?: {
        src: string;
        width: number;
        height: number;
      };
    };
    posts?: {
      link: string;
      title: string;
      featuredImage?: {
        small?: {
          src: string;
          width: number;
          height: number;
        };
        medium?: {
          src: string;
          width: number;
          height: number;
        };
        large?: {
          src: string;
          width: number;
          height: number;
        }
      };
    }[];
}[]
};
responsive: {
lg: number;
md: number;
sm: number;
xs: number;
gapLg: number;
gapMd: number;
gapSm: number;
gapXs: number;
};
carousel: {
enable: boolean;
buttonEnable: boolean;
paginationEnable: boolean;
buttonColor: string;
};
colors: {
primary: string;
light: string;
gray2: string;
gray7: string;
gray9: string;
};
typography: {
titleTypo: string;
};
border: {
enableBorder: boolean;
borderItemWidth: number;
borderItemStyle: string;
borderItemColor: string;
borderItemRadius: number;
};
customCSS: {
code: string;
};
};