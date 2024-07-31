import { ThemeOptions, createTheme } from "@mui/material/styles";
import { ThemeProps } from "../types";
import { DefaultTheme } from "@mui/system";
import urlSnakeLogo from "../assets/img/light_logo_snake.png";

declare module "@mui/system" {
  interface Theme extends ThemeProps, DefaultTheme {}
  interface ThemeOptions extends ThemeProps, DefaultTheme {}
}

export const themeOptionsLight: ThemeOptions = createTheme({
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
    colorFFF: "#fff",
    colorTextLink: "#6f88a0 ",
    colorBottomNavLink: "#f2c039",
    generalBackground: "#DAB07A",
    borderTableSnake: "#d3a05f",
    colorLinie: "#fff",
    hoverDownLinie: "#fff",
    textColorNav: "#fff",
    colorGrey: "#fff",
    colorNonActive: "#6f88a0 ",
    colorPurple: "#4D5BCE",
    colorLightLinkHomeGithub: "#222",
    colorLightOrange: "#222",
    colorLightGreen: "#FF0",
    whiteColor: "#6f88a0 ",
    colorPurpleFolder: "#fff",
    colorDarkBlue: "#DAB07A",
    colorDarkBlack: "#dab07a",
    colorDarkGrey: "#fff",
    colorTextCard: "#fff",
    colorOrangeText: "#222",
    colorPurpleText: "#4D5BCE",
    colorGreyText: "#f7f7f7",
    colorPinkText: "#ffff00",
    colorInputSend: "#d3a05f",
    colorBackInput: "#d3a05f",
    colorTextInput: "#fff",
    colorNavBar: "#d3a05f",
    colorInCard: "#d3a05f",
    backgroundAreaSnake: "#d3a05f",
    backgroundAreaFirst: "rgba(218, 176, 122, 0.70)",
    backgroundAreaSecond: "rgba(255, 255, 255, 0.09)",
    backgroundBtnSnake: "#d3a05f",
    fotnBtnSnake: "#ffda85",
    stopColorIn: "#d3a05f",
    stopColorOut: "#ffda85",
    strokeMiniCircle: "#ffff",
    resultCanal: "",
    inCanal: "",
    pointSnake: "#ccae6a",
    pointSnakeSecond: "#d3a05f",
    pointSnakeThread: "#fffbf2",
    colorSnakeLong: "255, 218, 133",
    colorCircleLeft: "#FF0",
    colorCircleRight: "#4D5BCE",
    colorSkillsBtnText: "#fff",
    colorSkillsBtnBack: "#dab07a",
    colorBackgroundFullScrenn:
      "linear-gradient(150deg, rgba(23, 85, 83, 0.90) 1.7%, rgba(255, 255, 0, 0.22) 70%)",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowField: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
    shadowTextField: "3px 3px 6px 0px rgba(0,0,0,0.5)",
    shadowAreaSnake: "1px 5px 11px 0px rgba(2, 18, 27, 0.25)",
    shadowBtnSnake: "5px 5px 11px 11px rgba(2, 18, 27, 0.21)",
  },
  myUrl: {
    snakeLogoUrl: `${urlSnakeLogo}`,
  },
});
