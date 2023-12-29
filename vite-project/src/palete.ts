import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      generalBackground: string;
      colorLinie: string;
      hoverDownLinie: string;
      textColorNav: string;
      colorGreyText: string;
      whiteColor: string;
      colorGrey: string;
      colorPurple: string;
      colorOrangeText: string;
      colorLightOrange: string;
      colorLightGreen: string;
      colorPurpleFolder: string;
      colorDarkBlue: string;
      borderTableSnake:string;
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
      colorOrangeText?: string;
      textColorNav?: string;
      whiteColor?: string;
      colorGrey?: string;
      colorPurple?: string;
      colorLightOrange?: string;
      colorLightGreen?: string;
      colorPurpleFolder?: string;
      colorDarkBlue?: string;
      borderTableSnake?:string;
      colorGreyText?: string;
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
    generalBackground: "#010C15",
    colorLinie: "#1E2D3D",
    borderTableSnake:'#0C1616',
    hoverDownLinie: "#FEA55F",
    textColorNav: "#607B96",
    colorGreyText: "#607B96",
    colorGrey: "#E5E9F0",
    colorOrangeText: "#FEA55F",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#E99287",
    colorLightGreen: "#43D9AD",
    whiteColor: "#fff",
    colorPurpleFolder: "#3A49A4",
    colorDarkBlue: "#011221",
    colorDarkBlack: "#010c15",
    colorDarkGrey: "#1C2B3A",
    colorPurpleText: "#5565E8",
    colorPinkText: "#C98BDF",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
});
