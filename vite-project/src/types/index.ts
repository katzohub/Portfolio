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
  textTwelve?: string;
  textThirteen?: string;
  textFourteen?: string;
  textFifteen?: string;
  textSixteen?: string;
  textSeventeen?: string;
  textEighteen?: string;
  textNineteen?: string;
  textTwenty?: string;
  textTwentyOne?: string;
  textTwentyTwo?: string;
  textTwentyThree?: string;
  textTwentyFour?: string;
  textTwentyFive?: string;
  textTwentySix?: string;
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
export type GeneralBoardProps = {
  generalHeading: string;
  generalText: string;
  leftTemplate: ReactNode;
  postprimaryTemplate?: ReactNode;
  generalTemplate: ReactNode;
  smallGeneralHeading: string;
};
export type MobileDrawerProps = {
  myOnOpen: boolean;
  myOnCloseFn: () => void;
  onSelectItem: (path: string) => void;
};
export type NavigationProps = {
  isNavigationLink: boolean;
  onSelectItem?: (path: string) => void;
};
export type SwitchButtonProps = {
  trueIcon: JSX.Element;
  falseIcon: JSX.Element;
  condition: boolean;
  toggleSwitch: () => void;
};
export type TemplateRowProps = {
  myNumber: string;
  text: ReactNode;
};
export type AboutContentProps = {
  templateProps: ReactNode;
  activeButton: string;
};
export type AboutNavButtonProps = {
  text: string;
  myIcon: ReactNode;
  myCondition: boolean;
  changeText: (translate: string, changeText: string) => void;
};
export type AboutSideBarProps = {
  changeText: (translate: string, changeText: string) => void;
  activeButton: string;
};
export type BigButtonProps = {
  children?: React.ReactNode;
  myBtnFn?: () => void;
};
export type ButtonCollapseProps = {
  isTrue: boolean;
  isScreen: boolean;
  handleClickContact?: () => void | undefined;
  activeContactButton?: string;
  openContact: boolean;
  nameCollapse: string;
  myIcon?: ReactNode;
};
export type DropdownButtonsProps = {
  myFirstInfo: ReactNode;
  mySecondInfo: ReactNode;
  myThirdInfo?: ReactNode;
};
export type Coordinate = { x: number; y: number };
export type GameSnakeProps = {
  isFullWindow: boolean;
};

export type ContainerSnakeProps = {
  isFullWindow: boolean;
  children: React.ReactNode;
};
export type SkillsSidebarProps = {
  checkedState: CheckedStateProps;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type KeyboardSnakeProps = {
  isFunctionKeyboard: boolean;
  handleButtonClick?: (direction: string) => void;
};
export type NavigationDataProps = {
  goUrl: string;
  icon: JSX.Element;
  text?: string;
};
export type NavbarProps = {
  isTopnav: boolean;
  text?: string;
};
export const defaultMenuContext: MenuContextType = {
  isMenuOpen: false,
  setIsMenuOpen: () => {},
};
