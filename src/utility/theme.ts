import { ITheme } from "../types/types";
export const theme: ITheme = {
  colors: {
    black: "#000;",
    grey: "#858598",
    white: "#FFFFFF",
    orange: "#FFBC33",
    orangeSecond: "#FFDE99",
    blue: "#5679D7",
    backdrop: "rgba(0, 0, 0, 0.20)",
  },

  fonts: {
    main: "Montserrat, sans-serif",
  },
  fontSizes: {
    xs: "10px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "18px",
    xxl: "28px",
    xxxl: "30px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },

  breakpoints: {
    tab: "@media screen and (min-width: 768px)",
    desc: "@media screen and (min-width: 1280px)",
    onlyMob: "@media screen and (max-width: 767px)",
    onlyTab: "@media screen and (min-width: 768px) and (max-width: 1279px)",
  },
};
