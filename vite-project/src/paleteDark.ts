import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      generalBackground: string;
      colorLinie: string;
      hoverDownLinie: string;
      textColorNav: string;
      whiteColor: string;
      colorGrey: string;
      colorPurple: string;
      colorLightOrange: string;
      colorLightGreen: string;
      colorPurpleFolder: string;
      colorDarkBlue: string; 
      colorDarkBlack: string;
      colorDarkGrey: string;
      colorPurpleText: string;
      colorPinkText: string;
    };
    myShadow: {
      shadowSideBar: string;
      shadowChat: string;
      shadowInput: string;
    };
  }

  // Rozšírte ThemeOptions o vlastné vlastnosti
  interface ThemeOptions {
    myColors?: {
      generalBackground?: string;
      colorLinie?: string;
      hoverDownLinie?: string;
      textColorNav?: string;
      whiteColor?: string;
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
    };
    myShadow?: {
      shadowSideBar?: string;
      shadowChat?: string;
      shadowInput?: string;
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
    generalBackground: "#DAB07A",
    colorLinie: "#fff",
    hoverDownLinie: "#fff",
    textColorNav: "#fff",
    colorGrey: "#607b96",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#F66B15",
    colorLightGreen: "#FF0",
    whiteColor: "#fff",
    colorPurpleFolder: "#fff",
    colorDarkBlue: "#DAB07A",
    colorDarkBlack: "#fff",
    colorDarkGrey: "#fff",
    colorPurpleText: "#fff",
    colorPinkText: "#fff",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
});
