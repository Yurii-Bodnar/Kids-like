export interface ITheme {
  colors: {
    black: string;
    white: string;
  };
  fonts: {
    main: string;
  };
  fontSizes: {};
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
