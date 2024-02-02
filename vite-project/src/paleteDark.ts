import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      colorFFF: string;
      generalBackground: string;
      colorBottomNavLink: string;
      colorTextLink: string;
      colorNavBar: string;
      colorLinie: string;
      hoverDownLinie: string;
      textColorNav: string;
      colorNonActive: string;
      colorBackInput: string;
      borderTableSnake: string;
      whiteColor: string;
      colorTextCard: string;
      colorGreyText: string;
      colorGrey: string;
      colorPurple: string;
      colorLightOrange: string;
      colorOrangeText: string;
      colorLightGreen: string;
      colorPurpleFolder: string;
      colorDarkBlue: string;
      colorDarkBlack: string;
      colorTextInput: string;
      colorDarkGrey: string;
      colorPurpleText: string;
      colorPinkText: string;
      colorInputSend: string;
    };
    myShadow: {
      shadowSideBar: string;
      shadowChat: string;
      shadowInput: string;
      shadowField: string;
      shadowTextField: string;
    };
  }

  // Rozšírte ThemeOptions o vlastné vlastnosti
  interface ThemeOptions {
    myColors?: {
      colorFFF?: string;
      generalBackground?: string;
      colorTextLink?: string;
      colorLinie?: string;
      colorTextInput?: string;
      colorTextCard?: string;
      colorBottomNavLink?: string;
      colorOrangeText?: string;
      hoverDownLinie?: string;
      textColorNav?: string;
      colorBackInput?: string;
      colorNonActive?: string;
      colorGreyText?: string;
      whiteColor?: string;
      borderTableSnake?: string;
      colorGrey?: string;
      colorPurple?: string;
      colorLightOrange?: string;
      colorLightGreen?: string;
      colorPurpleFolder?: string;
      colorDarkBlue?: string;
      colorDarkBlack?: string;
      colorDarkGrey?: string;
      colorPurpleText?: string;
      colorPinkText?: string;
      colorNavBar?: string;
      colorInputSend?: string;
    };
    myShadow?: {
      shadowSideBar?: string;
      shadowChat?: string;
      shadowInput?: string;
      shadowField?: string;
      shadowTextField?: string;
    };
  }
}

export const themeOptionsDark: ThemeOptions = createTheme({
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
    colorTextLink: "#607B96",
    colorBottomNavLink: "#f2c039",
    generalBackground: "#DAB07A",
    borderTableSnake: "#888",
    colorLinie: "#fff",
    hoverDownLinie: "#fff",
    textColorNav: "#fff",
    colorGrey: "#fff",
    colorNonActive: "#607B96",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#F66B15",
    colorLightGreen: "#FF0",
    whiteColor: "#607B96",
    colorPurpleFolder: "#fff",
    colorDarkBlue: "#DAB07A",
    colorDarkBlack: "#dab07a",
    colorDarkGrey: "#fff",
    colorTextCard: "#fff",
    colorOrangeText: "#f66b15",
    colorPurpleText: "#4D5BCE",
    colorGreyText: "#f7f7f7",
    colorPinkText: "#ffff00",
    colorInputSend: "#d3a05f",
    colorBackInput: "#d3a05f",
    colorTextInput: "#fff",
    colorNavBar: "#cc9044",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowField: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
    shadowTextField: "3px 3px 6px 0px rgba(0,0,0,0.5)",
  },
});
