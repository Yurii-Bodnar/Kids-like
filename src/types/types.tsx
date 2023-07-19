export interface ITheme {
  colors: {
    black: string;
    grey: string;
    white: string;
    orange: string;
    orangeSecond: string;
    blue: string;
    backdrop: string;
  };
  fonts: {
    main: string;
  };
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
  breakpoints: {
    tab: string;
    desc: string;
    onlyMob: string;
    onlyTab: string;
  };
}
