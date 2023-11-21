import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      colorLinie: string;
      hoverDownLinie: string;
      textColorNav: string;
      whiteColor: string;
      colorGrey: string;
      colorPurple: string;
      colorLightOrange: string;
      colorLightGreen: string;
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
      colorLinie?: string;
      hoverDownLinie?: string;
      textColorNav?: string;
      whiteColor?: string;
      colorGrey?: string;
      colorPurple?: string;
      colorLightOrange?: string;
      colorLightGreen?: string;
    };
    myShadow?: {
      shadowSideBar?: string;
      shadowChat?: string;
      shadowInput?: string;
    };
  }
}

export const themeOptions: ThemeOptions = createTheme({
  myColors: {
    colorLinie: "#1E2D3D",
    hoverDownLinie: "#FEA55F",
    textColorNav: "#607B96",
    colorGrey: "#E5E9F0",
    colorPurple: "#4D5BCE",
    colorLightOrange: "#E99287",
    colorLightGreen: "#43D9AD",
    whiteColor: "#fff",
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
});
