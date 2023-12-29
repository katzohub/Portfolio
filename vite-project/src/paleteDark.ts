import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      generalBackground: string;
      colorLinie: string;
      hoverDownLinie: string;
      textColorNav: string;
      borderTableSnake:string;
      whiteColor: string;
      colorGreyText: string;
      colorGrey: string;
      colorPurple: string;
      colorLightOrange: string;
      colorOrangeText: string;
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
      colorOrangeText?: string;
      hoverDownLinie?: string;
      textColorNav?: string;
      colorGreyText?: string;
      whiteColor?: string;
      borderTableSnake?:string;
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
    borderTableSnake:'#888',
    colorLinie: "#fff",
    hoverDownLinie: "#fff",
    textColorNav: "#fff",
    colorGrey: "#fff",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#F66B15",
    colorLightGreen: "#FF0",
    whiteColor: "#607B96",
    colorPurpleFolder: "#fff",
    colorDarkBlue: "#DAB07A",
    colorDarkBlack: "#fff",
    colorDarkGrey: "#fff",
    colorOrangeText: "#f66b15",
    colorPurpleText: "#4D5BCE",
    colorGreyText: "#f7f7f7",
    colorPinkText: "#ffff00",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
});
