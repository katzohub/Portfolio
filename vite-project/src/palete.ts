import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    myColors: {
      colorFFF: string;
      generalBackground: string;
      colorLinie: string;
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
      colorLinie?: string;
      colorBottomNavLink?: string;
      hoverDownLinie?: string;
      colorTextLink?: string;
      colorBackInput?: string;
      colorOrangeText?: string;
      textColorNav?: string;
      colorNonActive?: string;
      colorTextCard?: string;
      whiteColor?: string;
      colorGrey?: string;
      colorPurple?: string;
      colorLightOrange?: string;
      colorLightGreen?: string;
      colorPurpleFolder?: string;
      colorDarkBlue?: string;
      borderTableSnake?: string;
      colorTextInput?: string;
      colorGreyText?: string;
      colorDarkBlack?: string;
      colorDarkGrey?: string;
      colorPurpleText?: string;
      colorPinkText?: string;
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
  },
  myShadow: {
    shadowSideBar: "2px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowChat: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowInput: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    shadowField: "0px 0px 0px 2px rgba(96, 123, 150, 0.30)",
    shadowTextField: "3px 3px 6px 0px rgba(0,0,0,0.5)",
  },
});
