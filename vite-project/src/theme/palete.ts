import { ThemeOptions, createTheme } from "@mui/material/styles";
import { DefaultTheme } from "@mui/system";
import { ThemeProps } from "../types";
import urlSnakeLogo from "../assets/img/dark_logo_snake.png";

declare module "@mui/system" {
  interface Theme extends ThemeProps, DefaultTheme {}
  interface ThemeOptions extends ThemeProps, DefaultTheme {}
}

export const themeOptions: ThemeOptions = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 485,
      md: 800,
      lg: 1230,
      xl: 1460,
    },
  },
  myColors: {
    colorRateUsSelect: "#8c8c8c",
    colorFFF: "#fff",
    colorTextLink: "#fff",
    colorBottomNavLink: "#fea55f",
    generalBackground: "#010C15",
    colorLinie: "#1E2D3D",
    borderTableSnake: "#0C1616",
    hoverDownLinie: "#FEA55F",
    textColorNav: "#6f88a0 ",
    colorGreyText: "#6f88a0 ",
    colorNonActive: "#6f88a0 ",
    colorGrey: "#E5E9F0",
    colorOrangeText: "#FEA55F",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#E99287",
    colorLightLinkHomeGithub: "#E99287",
    colorLightGreen: "#43D9AD",
    whiteColor: "#fff",
    colorPurpleFolder: "#3A49A4",
    colorDarkBlue: "#011221",
    colorTextCard: "#6f88a0 ",
    colorDarkBlack: "#010c15",
    colorDarkGrey: "#1C2B3A",
    colorPurpleText: "#5565E8",
    colorPinkText: "#C98BDF",
    colorInputSend: "#6f88a0 ",
    colorBackInput: "#011221",
    colorTextInput: "#6f88a0 ",
    colorNavBar: "#010c15",
    colorInCard: "#011221",
    backgroundAreaSnake: "#021927",
    backgroundBtnSnake: "rgba(1, 22, 39, 0.84)",
    backgroundAreaFirst: "rgba(23, 85, 83, 0.70)",
    backgroundAreaSecond: "rgba(67, 217, 173, 0.09)",
    fotnBtnSnake: "#43D9AD",
    stopColorIn: "#196C6A",
    stopColorOut: "#114B4A",
    strokeMiniCircle: "#114944",
    resultCanal: "hardAlpha",
    inCanal: "SourceAlpha",
    pointSnake: "#43D9AD",
    pointSnakeSecond: "#297877",
    pointSnakeThread: "#2e8c82",
    colorSnakeLong: "67, 217, 173",
    colorCircleLeft: "#43D9AD",
    colorCircleRight: "#4D5BCE",
    colorSkillsBtnText: "#fff",
    colorSkillsBtnBack: "#1E2D3D",
    colorBackgroundFullScrenn:
      "linear-gradient(150deg, rgba(23, 85, 83, 0.90) 1.7%, rgba(67, 217, 173, 0.22) 81.82%)",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowField: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
    shadowTextField: "3px 3px 6px 0px rgba(0,0,0,0.5)",
    shadowAreaSnake: "1px 5px 11px 0px rgba(2, 18, 27, 0.71)",
    shadowBtnSnake: "1px 5px 11px 0px rgba(2, 18, 27, 0.71)",
  },
  myUrl: {
    snakeLogoUrl: `${urlSnakeLogo}`,
  },
  myOpacity: {
    opacitySelectRateUs: "0.6",
  },
});
