import { ReactNode, SetStateAction, Dispatch } from "react";
export type PointSnakeProps = {
  index: number;
  candyCount: number;
};
export type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};
export type MenuProviderProps = {
  children: ReactNode;
};
export type ThemeContextType = {
  themeMode: string;
  toggleTheme: () => void;
};
export type DisplayDataProps = {
  name: string;
  email: string;
  message: string;
  date: string;
};
export type CheckedStateProps = {
  all: boolean;
  html: boolean;
  css: boolean;
  sass: boolean;
  tailwind: boolean;
  mui: boolean;
  javascript: boolean;
  typescript: boolean;
  php: boolean;
  react: boolean;
  firebase: boolean;
};
export type TextProps = {
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
  textFive?: string;
  textSix?: string;
  textSeven?: string;
  textEight?: string;
  textNine?: string;
  textTen?: string;
  textEleven?: string;
  textTwelve: string;
};
export interface ThemeProps {
  myColors: {
    colorFFF: string;
    generalBackground: string;
    colorLinie: string;
    colorNavBar: string;
    colorBottomNavLink: string;
    colorTextLink: string;
    hoverDownLinie: string;
    textColorNav: string;
    colorNonActive: string;
    colorGreyText: string;
    colorTextCard: string;
    colorBackInput: string;
    whiteColor: string;

    colorGrey: string;
    colorPurple: string;
    colorOrangeText: string;
    colorLightOrange: string;
    colorLightGreen: string;
    colorPurpleFolder: string;
    colorTextInput: string;
    colorDarkBlue: string;
    borderTableSnake: string;
    colorDarkBlack: string;
    colorLightLinkHomeGithub: string;
    colorDarkGrey: string;
    colorPurpleText: string;
    colorPinkText: string;
    colorInputSend: string;
    colorInCard: string;
    backgroundAreaSnake: string;
    backgroundAreaFirst: string;
    backgroundAreaSecond: string;
    backgroundBtnSnake: string;
    fotnBtnSnake: string;
    stopColorIn: string;
    stopColorOut: string;
    strokeMiniCircle: string;
    resultCanal: string;
    inCanal: string;
    pointSnake: string;
    colorSnakeLong: string;
    colorCircleLeft: string;
    colorCircleRight: string;
    pointSnakeSecond: string;
    pointSnakeThread: string;
  };
  myShadow: {
    shadowSideBar: string;
    shadowChat: string;
    shadowInput: string;
    shadowField: string;
    shadowTextField: string;
    shadowAreaSnake: string;
    shadowBtnSnake: string;
  };
  myUrl: {
    snakeLogoUrl: string;
  };
}
