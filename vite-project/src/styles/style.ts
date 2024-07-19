import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const usePageStyles = makeStyles((theme: Theme) => ({
  linkSocial: {
    color: "#fff",
    display: "flex",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#607B96",
    },
  },
  backColor: {
    width: "100vw",
    minHeight: "100dvh",
    backgroundColor: theme.myColors.generalBackground,
  },
  iconMobileMenu: {
    display: "none !important",
    [theme.breakpoints.down("md")]: {
      display: "flex !important",
      fontSize: "1.25rem",
      width: "auto !important",
      padding: "0 !important",
      fontFamily: "Fira Code",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: 450,
      lineHeight: "normal",
      color: `${theme.myColors.textColorNav} !important`,
      textDecoration: "none !important",
      position: "relative",
      left: "12.5px",
      transition: "color 0.3s ease-in",
      "&:hover": {
        color: `${theme.myColors.whiteColor} !important`,
      },
    },
  },
  // mobielNavigation
  boxMobileNav: {
    position: "fixed",
    top: "0",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    padding: "10px 20px",
    borderBottom: `2px solid ${theme.myColors.colorLinie}`,
    height: "50px",
    backgroundColor: theme.myColors.colorNavBar,
    zIndex: 9999,
  },
  iconMobileNav: {
    //  color: "#607B96",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  iconCloseMobileNav: {
    // color: "white",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  linkHomeMobileNav: {
    marginTop: "50px",
    padding: "10px 0",
    borderBottom: `2px solid ${theme.myColors.colorLinie}`,
    width: "90vw",
    color: "#607B96",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    },
    "&.active": {
      color: "#fff !important",
    },
  },
  nextLinkMobileNav: {
    color: "#607B96",
    padding: "10px 0",
    borderBottom: `2px solid ${theme.myColors.colorLinie}`,
    transition: "color 0.3s ease",
    width: "90vw",
    "&:hover": {
      color: "#fff",
    },
    "&.active": {
      color: "#fff !important",
    },
  },

  //Bottom Nav
  bootomNavContainer: {
    position: "fixed",
    bottom: "0",
    left: "0px",
    width: "100vw",
    borderTop: `2px solid ${theme.myColors.colorLinie}`,
    height: "56px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.myColors.colorNavBar,
    zIndex: 999,
  },
  // component Navigation navLinkLeft

  bottomNavContainer: {
    position: "absolute",
    bottom: "0",

    width: "95%",
    height: "56px",
    borderTop: `2px solid ${theme.myColors.colorLinie}`,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    background: theme.myColors.generalBackground,
    zIndex: 9999,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  switchBox: {
    height: "100%",
    borderRight: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 7.5px",
  },
  navBoxItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    fontFamily: "Fira Code !important",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav} !important`,
    borderRight: `2px solid ${theme.myColors.colorLinie}`,
    textDecoration: "none !important",
    height: "56px",
    paddingRight: "10px",
    textWrap: "nowrap",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease-in",
    [theme.breakpoints.down("md")]: {
      padding: "0 10px",
    },
  },
  // component Navigation navLinkLeft
  switch: {
    transform: "scale(1.3)",
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#092E40 !important",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#FCE8B3 !important",
    },
  },
  switchLanguage: {
    transform: "scale(1.3)",
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#092E40 !important",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#FCE8B3 !important",
    },
  },
  switchLightIcon: {
    color: "#fff",
    background: "#F2C039",
    borderRadius: "50%",
    padding: "4px",
    width: "20px !important",
    height: "20px !important",
  },
  switchIconLanguage: {
    position: "relative",
    top: "-3px",
  },
  switchDarkIcon: {
    color: "#fff",
    background: "#25AFEE",
    borderRadius: "50%",
    padding: "4px",
    width: "20px !important",
    height: "20px !important",
  },
  navContainerThree: {
    height: "100%",
    marginLeft: "80px",
  },
  navContainerThreeBottom: {
    display: "flex",
  },

  navBoxItemCenter: {
    display: "flex !important",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  navBoxItemCenterBottom: {
    display: "flex !important",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      position: "absolute",
      right: "0",
      top: "0",
    },
  },
  navBoxCenter: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav} !important`,
    textDecoration: "none !important",
    height: "56px",
    display: "flex",
    borderRight: `2px solid ${theme.myColors.colorLinie} !important`,
    padding: "0 10px !important",
    alignItems: "center",
    zIndex: 999999,
    transition: "color 0.3s ease-in",

    "&:hover": {
      "& .MuiListItemIcon-root, & .MuiListItemText-root": {
        transition: "color .2s",
        color: `${theme.myColors.whiteColor} !important`,
      },
    },

    "&.active": {
      color: `${theme.myColors.colorTextLink} !important`,
      borderBottom: `3px solid ${theme.myColors.colorBottomNavLink} !important`,
      "&:hover": {
        background: "transparent !important",
      },
      "& svg": {
        color: `${theme.myColors.whiteColor} !important`,
      },
    },
    "&:last-child": {
      borderLeft: `2px solid ${theme.myColors.colorLinie} !important`,
      borderRight: "none !important",
      position: "absolute",
      right: "0",
    },
    [theme.breakpoints.down("md")]: {
      borderRight: "none !important",
      borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,

      "&:last-child": {
        borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
        borderRight: "none",
        borderLeft: "none !important",
        position: "relative",
      },
      "&.active": {
        color: `${theme.myColors.colorTextLink} !important`,
        borderBottom: `4px solid ${theme.myColors.colorBottomNavLink} !important`,
      },
      "&:first-child": {
        borderTop: `1px solid ${theme.myColors.colorLinie} !important`,
      },
      "&:hover": {
        background: "rgba(255, 255, 255, 0.08) !important",
      },
    },
  },
  bottomLink: {
    color: `${theme.myColors.textColorNav} !important`,
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
  navLinkLeft: {
    fontFamily: "Fira Code",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav} !important`,
    textDecoration: "none !important",
    height: "56px",
    display: "flex",
    borderRight: `2px solid ${theme.myColors.colorLinie}`,
    padding: "0 10px",
    alignItems: "center",
    transition: "color 0.3s ease-in",

    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
    "&.active": {
      color: `${theme.myColors.colorTextLink} !important`,
      borderBottom: `4px solid ${theme.myColors.colorBottomNavLink} !important`,
    },
    "&:last-child": {
      borderLeft: `2px solid ${theme.myColors.colorLinie}`,
      borderRight: "none",
      position: "absolute",
      right: "0",
      textDecoration: "none !important",
    },
    "& .github-link": {
      position: "relative",
      top: "1.5px",
      right: "3px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      "&:last-child": {
        borderLeft: "none",
        borderRight: "none",
        position: "static",
        textDecoration: "none !important",
      },
      "&:first-child": {
        borderLeft: `2px solid ${theme.myColors.colorLinie}`,
      },
    },
  },
  navContainer: {
    position: "absolute",
    top: "0",
    width: "95%",

    borderBlockEnd: `2px solid ${theme.myColors.colorLinie}`,
    height: "56px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    background: `${theme.myColors.generalBackground} !important`,
    zIndex: "9999",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  // end rechanged

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
    "&.active": {
      color: `${theme.myColors.colorTextLink} !important`,
      borderBottom: `4px solid ${theme.myColors.colorBottomNavLink} !important`,
    },
  },
  navBoxRightMinScreenGit: {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    color: `${theme.myColors.textColorNav}`,
    textDecoration: "none !important",
    height: "100%",
    width: "100%",
    display: "flex",
    // borderRight: `2px solid ${theme.myColors.colorLinie}`,
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
    width: "140px",
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
    "&.active": {
      color: `${theme.myColors.colorTextLink} !important`,
      borderBottom: `4px solid ${theme.myColors.colorBottomNavLink} !important`,
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
    background: `linear-gradient(150deg, ${theme.myColors.backgroundAreaFirst} 1.7%, ${theme.myColors.backgroundAreaSecond} 81.82%)`,
    boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
    border: `1px solid ${theme.myColors.borderTableSnake}`,
    borderRadius: "8px",
    position: "relative",
    zIndex: "99",
    [theme.breakpoints.down("lg")]: {
      //  marginBlockEnd: "50px",
    },
    [theme.breakpoints.down("md")]: {
      marginBlockEnd: "0px",
      display: "none",
    },
  },
  snakeContainerFullWidth: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background:
      "linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)",
    boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
    border: `1px solid ${theme.myColors.borderTableSnake}`,
    position: "relative",
    zIndex: "9999",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  snakeContainerFoodFullWidth: {
    width: "120px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "5px",
    position: "relative",
    top: "-200px",
    left: "112px",
    [theme.breakpoints.down("md")]: {
      top: "15px",
      left: "50%",
      height: "auto",
      width: "240px",
      transform: "translateX(-50%)",
      position: "absolute",
      flexDirection: "column",
    },
  },
  containerKeyboardFullWidth: {
    position: "relative",
    top: "215px",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "-65px",
      left: "0px",
    },
  },
  pointContainerFoodFullWidth: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",

      justifyContent: "center",
    },
  },
  snakeBackEffectGreen: {
    [theme.breakpoints.up("sm")]: {
      zIndex: "-10",
      position: "absolute",
      top: -150,
      left: -80,
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  snakeBackEffectPurple: {
    // zIndex: "-10",
    // position: "absolute",
    // bottom: -65,
    // right: -70,
    // transform: "scale(0.7)",
    zIndex: "-10",
    position: "absolute",
    bottom: -65,
    right: -70,
    transform: "scale(0.7)",
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
  // toggle class
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
    color: "#fff",
  },
  snakeGameArea: {
    background: theme.myColors.backgroundAreaSnake,
    boxShadow: `${theme.myShadow.shadowAreaSnake} inset`,
  },
  snakeGameAreaFullWidth: {
    background: theme.myColors.backgroundAreaSnake,
    boxShadow: `${theme.myShadow.shadowAreaSnake} inset`,
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "20px",
    },
  },
  snakeBoxSettingFullWidth: {
    marginTop: "0px",
    width: "240px",
    height: "142px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    borderRadius: "8px",
    background: "rgba(1, 20, 35, 0.19)",
    color: "#fff",
    position: "relative",
    top: "-110px",
    left: "50px",
    "& p": {
      fontSize: 14,
      fontFamily: "Fira Code",
      fontWeight: "450",
      wordWrap: "break-word",
    },
    [theme.breakpoints.down("md")]: {
      position: "relative",
      background: "transparent",
      top: "100px",
      left: "0px",
    },
  },
  snakeBoxSettingFullWidthFullWidth: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  snakeArrowTextTwoFullWidth: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-10px",
    },
  },
  snakeUp: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.myColors.generalBackground,
    color: "#fff",
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
    background: theme.myColors.generalBackground,
    color: "#fff",
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
    background: theme.myColors.generalBackground,
    color: "#fff",
    borderRadius: "8px",
    zIndex: 4,
  },
  snakeArrowRight: {
    width: "50px",
    height: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.myColors.generalBackground,
    color: "#fff",
    borderRadius: "8px",
    position: "relative",
    right: "-5px",
    zIndex: 4,
  },
  snakeFoodLeft: {
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "5px",
    position: "relative",
    left: "32px",
    top: "25px",
    zIndex: "20 !important",
  },

  // component LeftHeader
  leftHeaderGreen: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      zIndex: "1",
      top: "120px",
      left: "-220px",
      display: "block",
      transform: "scale(0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.7)",
      top: "10px",
    },
  },
  leftHeaderPurple: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      zIndex: "1",
      position: "absolute",
      top: "-110px",
      right: "-200px",
      display: "block",
      transform: "scale(0.7)",
    },

    [theme.breakpoints.down("sm")]: {
      top: "-200px",
    },
  },

  leftHeaderBox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
    alignContent: "space-between",
    zIndex: "99",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
      alignContent: "center",
      gap: "25px 0",
      height: "max-content",
    },
  },

  leftHeaderContainer: {
    height: "470px",
    display: "flex",
    flexDirection: "column",

    position: "relative",

    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "7px",
      paddingBottom: "102px",
    },
  },
  leftHeaderH3: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "18px !important",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  leftHeaderH1: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorGrey} !important`,
    fontSize: "62px !important",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: "42px !important",
    },
  },
  leftHeaderH2: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.colorPurple} !important`,
    fontSize: "30px !important",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
  },
  leftHeaderP: {
    fontFamily: "Fira Code !important",
    color: `${theme.myColors.textColorNav} !important`,
    fontSize: "16px !important",
    fontStyle: "normal",
    fontWeight: 450,
    padding: "2.5px 0",
    lineHeight: "normal",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
      display: "none",
    },
  },
  mobileLeftHeaderP: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
      fontFamily: "Fira Code !important",
      color: `${theme.myColors.textColorNav} !important`,
      fontStyle: "normal",
      fontWeight: 450,
      padding: "2.5px 0",
      lineHeight: "normal",
    },
  },
  leftHeaderSpanOne: {
    fontFamily: "Fira Code",
    color: `${theme.myColors.colorPurple} !important`,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  miniCircleWrapper: {
    "& .mini-circle": {
      "& .mini-stop-one": {
        stopColor: theme.myColors.stopColorOut,
      },
      "& .mini-stop-two": {
        stopColor: theme.myColors.stopColorIn,
      },
      "& .mini-path": {
        stroke: theme.myColors.strokeMiniCircle,
      },
      "& .feColorMatrix": {
        result: theme.myColors.resultCanal,
        in: theme.myColors.inCanal,
      },
    },
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
    color: theme.myColors.colorLightLinkHomeGithub,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    borderBottom: "1px solid transparent",
    transition: "border-bottom 0.3s ease-in",

    "&:hover": {
      borderBottom: `1px solid ${theme.myColors.colorLightLinkHomeGithub}`,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  leftHeaderSpanFourMobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      fontFamily: "Fira Code",
      color: theme.myColors.colorLightLinkHomeGithub,
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      borderBottom: "1px solid transparent",
      transition: "border-bottom 0.3s ease-in",
    },
    "&:hover": {
      borderBottom: `1px solid ${theme.myColors.colorLightLinkHomeGithub}`,
    },
  },
  // OnePage
  pageContainer: {
    minHeight: "100dvh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageWrap: {
    minHeight: "100dvh",
    width: "100vw",
    maxWidth: "1700px",
    padding: "56px 100px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      position: "relative",

      margin: "0px 0px",
      padding: "0px",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      gap: "80px 0",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      top: "0px",
      height: "100dvh",
    },
    [theme.breakpoints.down("sm")]: {
      zIndex: "5",
      padding: "0px",
    },
  },
  pageLeftWrap: {
    position: "relative",
    padding: "0 20px",
    width: "50%",
    maxWidth: "600px",
    height: "100%",
    zIndex: "999",
    display: "flex",
    flexDirection: "column",

    alignItems: "space-between",
    justifyContent: "space-between",

    [theme.breakpoints.down("lg")]: {
      width: "550px",
      position: "relative",
      top: "50px",
      height: "auto",

      // marginBlockEnd: "50px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBlockEnd: "0px",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  pageRightWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    maxWidth: "600px",
    position: "relative",
    //  zIndex: "999 !important",
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
