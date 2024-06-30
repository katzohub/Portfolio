import { ThemeOptions, createTheme } from "@mui/material/styles";
import { DefaultTheme } from "@mui/system";
import { ThemeProps } from "../types";
declare module "@mui/material/styles" {
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
    colorFFF: "#fff",
    colorTextLink: "#fff",
    colorBottomNavLink: "#fea55f",
    generalBackground: "#010C15",
    colorLinie: "#1E2D3D",
    borderTableSnake: "#0C1616",
    hoverDownLinie: "#FEA55F",
    textColorNav: "#607B96",
    colorGreyText: "#607B96",
    colorNonActive: "#607B96",
    colorGrey: "#E5E9F0",
    colorOrangeText: "#FEA55F",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#E99287",
    colorLightLinkHomeGithub: "#E99287",
    colorLightGreen: "#43D9AD",
    whiteColor: "#fff",
    colorPurpleFolder: "#3A49A4",
    colorDarkBlue: "#011221",
    colorTextCard: "#607B96",
    colorDarkBlack: "#010c15",
    colorDarkGrey: "#1C2B3A",
    colorPurpleText: "#5565E8",
    colorPinkText: "#C98BDF",
    colorInputSend: "#607B96",
    colorBackInput: "#011221",
    colorTextInput: "#607B96",
    colorNavBar: "#010c15",
    colorInCard: "#011221",
    backgroundAreaSnake: "#021927",
    backgroundBtnSnake: "rgba(1, 22, 39, 0.84)",
    backgroundAreaFirst: "rgba(23, 85, 83, 0.70)",
    backgroundAreaSecond: "rgba(67, 217, 173, 0.09)",
    fotnBtnSnake: "#43D9AD",
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
});
