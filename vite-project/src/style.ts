import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
// #
const usePageStyles = makeStyles((theme: Theme) => ({
  // component Navigation navLinkLeft
  navContainer: {
    position: "absolute",
    top: "0",
    left: "30px",
    width: "94vw",
    borderBlockEnd: `1px solid ${theme.myColors.colorLinie}`,
    height: "56px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    zIndex: "9999",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: "0",
    left: "30px",
    width: "94vw",
    borderTop: `1px solid ${theme.myColors.colorLinie}`,
    height: "56px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",

    background: "#010c15",
    zIndex: 999,
  },

  navBoxItem: {
    height: "100%",
    cursor: "default",
  },
  navLink: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav} !important`,
    textDecoration: "none !important",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease-in",
  },
  navContainerThree: {
    height: "100%",
    paddingLeft: "20px",
    marginLeft: "100px",
  },
  navContainerThreeBottom: {
    height: "100%",
    marginLeft: "20px",
  },
  navBoxItemCenter: {
    color: theme.myColors.textColorNav,
    cursor: "pointer",
    height: "100%",
    borderBottom: "2px solid transparent",
    transition: "border-bottom-color 0.3s ease-in, color 0.3s ease-in",
  },
  navLinkLeft: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav}`,
    textDecoration: "none !important",
    height: "56px",
    width: "100%",
    display: "flex",
    borderLeft: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 10px",
    alignItems: "center",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  navBoxCenter: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav}`,
    textDecoration: "none !important",
    height: "100%",
    width: "100%",
    display: "flex",
    borderLeft: `2px solid ${theme.myColors.colorLinie}`,
    borderRight: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 10px",
    alignItems: "center",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  navBoxRight: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav}`,
    textDecoration: "none !important",
    height: "100%",
    width: "100%",
    display: "flex",
    borderRight: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 10px",
    alignItems: "center",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  navBoxContact: {
    color: theme.myColors.textColorNav,
    position: "absolute",
    top: "0",
    right: "0",
    cursor: "pointer",
    width: "200px",
    height: "100%",

    borderLeft: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 10px",
    transition: "border-bottom-color 0.3s ease-in, color 0.3s ease-in",
    "&:hover": {
      borderBottomColor: theme.myColors.hoverDownLinie,
    },
  },
  navLinkContact: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav} `,
    textDecoration: "none !important",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  // component LeftHeader
  leftHeaderContainer: {
    width: 520,
    height: 410,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    left: "-40px",
  },
  leftHeaderH3: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "18px !important",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  leftHeaderH1: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "62px !important",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  leftHeaderH2: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.colorPurple} !important`,
    fontSize: "32px !important",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  leftHeaderP: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.textColorNav} !important`,
    fontSize: "16px !important",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  leftHeaderSpanOne: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.colorPurple} !important`,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  leftHeaderSpanTwo: {
    fontFamily: "Fira Code",
    color: theme.myColors.colorLightGreen,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  leftHeaderSpanThree: {
    color: theme.myColors.whiteColor,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  leftHeaderSpanFour: {
    fontFamily: "Fira Code",
    color: theme.myColors.colorLightOrange,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    textDecoration: "underline",
  },

  // Form Styles
  formTextOrange: {
    color: "#FEA55F",
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
  },
  formTextPurple: {
    color: "#5565E8",
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
  },
  formTextPink: {
    color: "#C98BDF",
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
  },
  formTextGrey: {
    color: "#607B96",
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
  },
}));

export default usePageStyles;
