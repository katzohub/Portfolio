import { ReactNode, SetStateAction, Dispatch } from "react";
export interface PointSnakeProps {
  index: number;
  candyCount: number;
}
export interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export interface MenuProviderProps {
  children: ReactNode;
}
export interface ThemeContextType {
  themeMode: string;
  toggleTheme: () => void;
}
export interface DisplayDataProps {
  name: string;
  email: string;
  message: string;
  date: string;
}
export interface CheckedStateProps {
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
}
export interface TextProps {
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
}
export interface ThemeProps {
  myColors: {
    colorRateUsSelect: string;
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
    colorBackgroundFullScrenn: string;
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
    colorSkillsBtnText: string;
    colorSkillsBtnBack: string;
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
  myOpacity: {
    opacitySelectRateUs: string;
  };
}
export interface GeneralBoardProps {
  generalHeading: string;
  generalText: string;
  leftTemplate: ReactNode;
  postprimaryTemplate?: ReactNode;
  generalTemplate: ReactNode;
  smallGeneralHeading: string;
  isPageSkills?: boolean;
}
export interface MobileDrawerProps {
  myOnOpen: boolean;
  myOnCloseFn: () => void;
  onSelectItem: (path: string) => void;
}
export interface NavigationProps {
  isNavigationLink: boolean;
  onSelectItem?: (path: string) => void;
}
export interface SwitchButtonProps {
  trueIcon: JSX.Element;
  falseIcon: JSX.Element;
  condition: boolean;
  toggleSwitch: () => void;
  myLabelName: string;
}
export interface TemplateRowProps {
  myNumber: string;
  text: ReactNode;
}
export interface AboutContentProps {
  templateProps: ReactNode;
  activeButton: string;
}
export interface AboutNavButtonProps {
  text: string;
  myIcon: ReactNode;
  myCondition: boolean;
  testCy: string;
  changeText: (translate: string, changeText: string) => void;
}
export interface AboutSideBarProps {
  changeText: (translate: string, changeText: string) => void;
  activeButton: string;
}
export interface BigButtonProps {
  children?: React.ReactNode;
  myBtnFn?: () => void;
  testId?: string;
}
export interface ButtonCollapseProps {
  isTrue: boolean;
  isScreen: boolean;
  handleClickContact?: () => void;
  activeContactButton?: string;
  openContact: boolean;
  nameCollapse: string;
  myIcon?: ReactNode;
}
export interface DropdownButtonsProps {
  myFirstInfo: ReactNode;
  mySecondInfo: ReactNode;
  myThirdInfo?: ReactNode;
}
export interface Coordinate {
  x: number;
  y: number;
}
export interface GameSnakeProps {
  isFullWindow: boolean;
}

export interface ContainerSnakeProps {
  isFullWindow: boolean;
  children: React.ReactNode;
}
export interface SkillsSidebarProps {
  checkedState: CheckedStateProps;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface KeyboardSnakeProps {
  isFunctionKeyboard: boolean;
  handleButtonClick?: (direction: string) => void;
}
export interface NavigationDataProps {
  goUrl: string;
  icon: JSX.Element;
  text?: string;
  dataCy: string;
  aria?: string;
}
export interface NavbarProps {
  isTopnav: boolean;
  text?: string;
}
export const defaultMenuContext: MenuContextType = {
  isMenuOpen: false,
  setIsMenuOpen: () => {
    // This function is empty by default
  },
};
