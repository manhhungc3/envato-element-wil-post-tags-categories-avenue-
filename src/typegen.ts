export type Data = {
general: {
variant: string;
imageRadius: number;
aspectRatio: string;
content: {
image: string;
title: string;
link: string;
}[];
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