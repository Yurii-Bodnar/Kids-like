import { ITheme } from "../types/types";
export const theme: ITheme = {
  colors: {
    black: "#212121;",
    white: "#FFFFFF",
  },

  fonts: {
    main: "Montserrat, sans-serif",
  },
  fontSizes: {},
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
