import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const usePageStyles = makeStyles((theme: Theme) => ({
  // mobielNavigation
  boxMobileNav: {
    position: "absolute",
    top: "0",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #1E2D3D",
    height: "50px",
    backgroundColor: "#010c15",
    zIndex: 9999,
  },
  iconMobileNav: {
    color: "#607B96",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  iconCloseMobileNav: {
    color: "white",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  linkHomeMobileNav: {
    marginTop: "50px",
    padding: "10px 0",
    borderBottom: "1px solid #1E2D3D",
    width: "90vw",
    color: "#607B96",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    },
  },
  nextLinkMobileNav: {
    color: "#607B96",
    padding: "10px 0",
    borderBottom: "1px solid #1E2D3D",
    transition: "color 0.3s ease",
    width: "90vw",
    "&:hover": {
      color: "#fff",
    },
  },
  //Bottom Nav
  bootomNavContainer: {
    position: "absolute",
    bottom: "0",
    left: "0px",
    width: "100vw",
    borderTop: `1px solid #1E2D3D`,
    height: "56px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#010c15",
    zIndex: 999,
  },
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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
  navTextLink: {
    position: "relative",
    top: "2px,",
    left: "-5px",
  },
  //GameSnake
  snakeContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    padding: "30px 0",
    background:
      "linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)",
    boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
    border: "1px solid #0C1616",
    borderRadius: "8px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  snakeBackEffectGreen: {
    [theme.breakpoints.up("sm")]: {
      zIndex: "-5",
      position: "absolute",
      top: -100,
      left: -50,
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  snakeBackEffectPurple: {
    [theme.breakpoints.up("sm")]: {
      zIndex: "-5",
      position: "absolute",
      bottom: -30,
      right: 30,
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  snakeScreenLogo: {
    position: "absolute",
    top: "50px",
    left: "67px",
  },
  //KeyBoard Container styled
  snakeBoxSetting: {
    marginTop: "35px",
    width: "181.382px",
    height: "142px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: " 8px",
    background: "rgba(1, 20, 35, 0.19)",
  },
  snakeArrowTextOne: {
    marginBottom: "8px !important",
    fontFamily: "Fira Code !important",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    position: "relative",
    left: "-4px",
  },
  snakeArrowTextTwo: {
    marginBottom: "16px !important",
    fontFamily: "Fira Code !important",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  snakeArrowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  snakeUp: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    borderRadius: "8px",
    position: "relative",
    top: "-5px",
    zIndex: 4,
  },
  snakeArrowWrap: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  snakeArrowLeft: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    borderRadius: "8px",
    position: "relative",
    left: "-5px",
  },
  snakeArrowDown: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    borderRadius: "8px",
    zIndex: 4,
  },
  snakeArrowRight: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    borderRadius: "8px",
    position: "relative",
    right: "-5px",
    zIndex: 4,
  },
  snakeFoodLeft: {
    position: "relative",
    left: "30px",
    top: "10px",
    color: "#FFF",
    fontFamily: "Fira Code !important",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  snakeContainerFood: {
    width: "120px",
    height: "50px",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "5px",
    position: "relative",
    zIndex: "10",
  },

  // component LeftHeader
  leftHeaderGreen: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "200px",
      left: "-220px",
      display: "block",
      transform: "scale(0.7)",
    },
  },
  leftHeaderPurple: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "0px",
      right: "-200px",
      display: "block",
      transform: "scale(0.7)",
    },
  },

  leftHeaderBox: {
    width: "100%",
    height: "100vh",
    justifyContent: "space-around",
    padding: "50px 0px 50px 15px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
    },
  },

  leftHeaderContainer: {
    height: "410px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "100vh",
    },
  },
  leftHeaderH3: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "18px !important",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
  leftHeaderH1: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "62px !important",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: "72px !important",
    },
  },
  leftHeaderH2: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorPurple} !important`,
    fontSize: "30px !important",
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
    borderBottom: "1px solid transparent",
    transition: "border-bottom 0.3s ease-in",

    "&:hover": {
      borderBottom: "1px solid #E99287",
    },
  },
  // OnePage
  pageContainer: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageWrap: {
    minHeight: "100vh",
    width: "100vw",
    maxWidth: "1700px",
    margin: "0 100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      position: "relative",
      top: "-50px",
      margin: "0px 0px",
    },
    [theme.breakpoints.down("md")]: {
      top: "0px",
    },
  },
  pageLeftWrap: {
    width: "50%",
    maxWidth: "600px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      width: "550px",
    },
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
  },
  pageRightWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    maxWidth: "600px",
    [theme.breakpoints.down("xl")]: {
      width: "550px",
    },
  },
  //Mobile
  mobileNavigationContainer: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default usePageStyles;
