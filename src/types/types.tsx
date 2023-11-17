
export interface ITheme {
  colors: {
    black: string;
    grey: string;
    greySecond: string;
    greyThird: string;
    white: string;
    orange: string;
    orangeSecond: string;
    blue: string;
    backdrop: string;
    inputBg: string;
  };
  fonts: {
    main: string;
    mainM: string;
    mainSemiBold: string;
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
    semiBold: number;
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
export type PropsForPublicRoute = {
  component:React.FC;
  redirectTo:string
}

export interface IAuthResponse {
  token: string;
  user: {
    email: string;
    id: string;
    balance: number;
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
        id: string | null;
      }
    ];
  };
  message: string;
}
export interface IAuthState {
  token: string;
  user: {
    email: string;
    id: string;
    balance: number;
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
        id: string | null;
      }
    ];
  };
  isLoading: boolean;
  error: string;
  successMessage: string;
}
export interface IUser {
  email: string;
  password: string;
}
