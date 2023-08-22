export interface ITheme {
  colors: {
    black: string;
    grey: string;
    greySecond: string;
    white: string;
    orange: string;
    orangeSecond: string;
    blue: string;
    backdrop: string;
  };
  fonts: {
    main: string;
    mainM: string;
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
    regular: number;
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
export type PropsForNavigation = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export interface IAuthState {
  token: string;
  data: {
    user: {
      email: string;
      id: string;
      balance: number;
      userName: string;
    };
  };
  week: {
    startWeekDate: string;
    endWeekDate: string;
    rewardsGained: number;
    rewardsPlanned: number;
    _id: string;
    tasks: [
      {
        title: string;
        reward: number;
        imageUrl: string;
        days: [{ date: string; isActive: boolean; isCompeted: boolean }];
        id: string;
      }
    ];
  };
}
