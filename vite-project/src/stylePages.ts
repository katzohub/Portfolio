import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
// [theme.breakpoints.down("md")]: {
//   display: "none !important",
// },
// [theme.breakpoints.down("md")]: {
//   width: "90%",
//   borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
// },
const usePageStyles = makeStyles((theme: Theme) => ({
  projectAlert: {
    [theme.breakpoints.down("md")]: {
      "& h1": {
        fontSize: "1rem !improtant",
        textAlign: "center",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        marginTop: "50px",
      },
    },
  },
  //AboutMe
  aboutHoverBtnEffect: {
    [theme.breakpoints.down("md")]: {
      borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    },
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  aboutContainer: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      overflowY: "auto",
      minHeight: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  aboutLeftNavContainer: {
    width: "267px",
    marginTop: "56px !important",
    borderRight: `1px solid ${theme.myColors.colorLinie}`,
    height: "92vh",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      marginTop: "50px !important",
      borderRight: `0px solid transparent`,
    },
  },
  aboutLeftWrap: {
    width: "94vw !important",
    background: "transparent !important",
    display: "flex",
    borderBottom: `1px solid ${theme.myColors.colorLinie}`,
    left: "30px",
    color: `${theme.myColors.whiteColor} !important`,
    fontFamily: "Fira Code !important",
    fontSize: "16px !important",
    fontStyle: "normal",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      width: "auto !important",
      borderBottom: `1px solid transparent`,
      left: "0px",
      display: "none",
    },
  },
  aboutMinWidth: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      position: "relative !important",
      left: "0px",
      color: `${theme.myColors.whiteColor} !important`,
      background: `${theme.myColors.colorDarkBlack} !important`,
      borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
      textDecoration: "underline",
      cursor: "default !important",
    },
  },
  aboutTextRight: {
    color: theme.myColors.textColorNav,
    position: "relative",
    left: "105px",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  aboutBtnStyle: {
    color: `${theme.myColors.textColorNav} !important`,
    "&:hover": {
      color: `${theme.myColors.whiteColor} !important`,
    },
  },
  aboutIconBio: {
    color: `${theme.myColors.colorLightOrange} !important`,
  },
  aboutIconInterest: {
    color: `${theme.myColors.colorLightGreen} !important`,
  },
  aboutIconEducation: {
    color: `${theme.myColors.colorPurpleFolder} !important`,
  },
  aboutBtnText: {
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    position: "relative",
    top: "1px",
    left: "-20px",
  },
  aboutBtnEducationStyle: {
    position: "relative",
    left: "15px",
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: `${theme.myColors.whiteColor} !important`,
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    },
  },
  aboutBtnEducationFont: {
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    paddingLeft: "10px",
  },
  aboutContactContainer: {
    marginTop: "100px !important",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: "240px",
    position: "relative",
    left: "27px",
    borderTop: `1px solid ${theme.myColors.colorLinie} !important`,
    borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: `${theme.myColors.whiteColor} !important`,
    },
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  // next about
  aboutNextContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: "20px",
      marginBottom: "100px",
    },
  },
  aboutDivider: {
    position: "relative",
    top: "105px",
    width: "1px !important",
    height: "90vh",
    background: "#1E2D3D",
    [theme.breakpoints.down("lg")]: {
      top: "0px",
      width: "100% !important",
      height: "1px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  aboutNextWrap: {
    marginTop: "150px",
    marginBottom: "80px",
    color: "white",
    padding: 2,
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    [theme.breakpoints.down("lg")]: {
      marginTop: "0px",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      marginBottom: "0px",
    },
  },
  aboutImg: {
    width: "225px",
    [theme.breakpoints.down("lg")]: {
      width: "150px",
    },
  },
  aboutNextMiniWrap: {
    borderRadius: "15px",
    border: `1px solid ${theme.myColors.colorLinie}`,
    background: theme.myColors.colorDarkBlue,
    padding: "7px 12.5px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 7.5px",
    },
  },
  aboutNextImgContainer: {
    position: "relative",
    top: "50px",
    borderRadius: "15px",
    border: `1px solid ${theme.myColors.colorLinie}`,
    background: theme.myColors.colorDarkBlue,
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      top: "15px",
    },
  },
  // TemplateAbout
  tempAboutText: {
    color: theme.myColors.textColorNav,
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    marginTop: "150px",
    margin: "0 10px",
    height: "70vh",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      marginTop: "100px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },
  tempAboutNumber: {
    position: "relative",
    left: "-10px",
  },
  tempAboutContainerText: {
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      fontWeight: 400,
      lineHeight: "18px",
    },
  },

  // LeftContact
  leftContactLink: {
    textDecoration: "none",
    color: theme.myColors.textColorNav,
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  leftFindMeIn: {
    textDecoration: "none",
    color: theme.myColors.textColorNav,
  },
  leftContactBtn: {
    position: "relative",
    left: "25px",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
      borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    },
  },
  leftContactIcon: {
    marginRight: "10px",
  },

  //Project
  projectContainer: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      overflowY: "auto",
    },
  },
  projectList: {
    width: "267px",
    marginTop: "56px !important",
    borderRight: `1px solid ${theme.myColors.colorLinie}`,
    height: "92vh",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
    },
  },
  projectLeftNav: {
    width: "94vw",
    color: `${theme.myColors.whiteColor} !important`,
    background: "transparent !important",
    display: "flex",
    borderBottom: `1px solid ${theme.myColors.colorLinie}`,
    position: "relative",
    left: "30px",
    fontFamily: "Fira Code !important",
    fontSize: "16px !important",
    fontStyle: "normal",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      width: "100vw !important",
      left: "0px !important",
      textDecoration: "underline !important",
    },
  },
  projectRightText: {
    color: theme.myColors.textColorNav,
    position: "relative",
    left: "155px",
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  projectRightForm: {
    marginLeft: "60px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row !important",
      marginLeft: "0px",
      margin: "0 10px !important",
    },
  },
  projectLabel: {
    color: theme.myColors.textColorNav,
  },
  projectCheckBox: {
    "& svg": { color: theme.myColors.textColorNav },
  },
  projectHoverBox: {
    "&:hover": {
      color: theme.myColors.whiteColor,
      transition: "color 0.3s ease-in",
    },
  },
  projectCategory: {
    marginRight: "15px",
    position: "relative",
    top: "2px",
    left: "5px",
  },
  //SkillSection
  skillContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  skillWrap: {
    position: "relative",
    top: "150px",
    left: "0px",
    height: "83vh",
    width: "100%",
    maxWidth: "1450px",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      top: "0px",
      left: "0px",
      height: "100%",
      marginBottom: "100px",
      overflowX: "hidden !important",
    },
  },
  skillBoxMinWidth: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "100vw",
      position: "relative",
      left: "-20px",
    },
  },
  skillBoxDividerTop: {
    background: "#1E2D3D !important",
    height: "1px !important",
    width: "100vw",
  },
  skillBoxText: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    paddingLeft: "15px",
    textDecoration: "underline",
    fontFamily: "Fira Code !important",
    lineHeight: "48px !important",
    listStyle: "none",
  },
  skillBoxDividerDown: {
    background: "#1E2D3D !important",
    height: "1px !important",
    width: "100%",
  },
  skillBoxCard: {
    marginBottom: "70px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0px",
    },
  },
  skillPositionWrap: {
    width: "100%",
    padding: "0 10px",
    margin: "0 10px",
    [theme.breakpoints.down("md")]: {
      width: "94%",
      position: "relative",
      left: "-7.5px",
    },
  },
  skillCard: {
    borderRadius: "15px",
    border: `1px solid ${theme.myColors.colorLinie} `,
    background: theme.myColors.colorDarkBlue,
    maxWidth: "100%",
    height: "420px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "350px",
    },
  },
  skillCardImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  skillCardHeading: {
    padding: "10px",
    "& h2": {
      color: "#fff",
      fontFamily: "Fira Code",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 450,
      lineHeight: "normal",
    },
    "& p": {
      marginTop: "5px",
      color: "#607B96",
      fontFamily: "Fira Code",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 450,
      lineHeight: "normal",
    },
  },
  skillCardText: {
    fontSize: "1em",
  },
  skillCardContainer: {
    position: "absolute",
    right: "15px",
    top: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    background: theme.myColors.colorDarkBlack,
    padding: "5px 10px",
    borderRadius: "10px",
  },
  skillCardIconWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  skillCardBtn: {
    transition: "transform 0.3s ease !important",
    background: `${theme.myColors.colorLinie} !important`,
    "&:hover": {
      transform: "scale(0.95)",
    },
  },
  skillCardLink: {
    color: theme.myColors.whiteColor,
    fontFamily: "Fira Code",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    textDecoration: "none",
    textTransform: "lowercase",
  },

  //ContactMe
  contactContainer: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      overflowY: "auto !improtant",
    },
  },
  contactList: {
    width: "267px",
    marginTop: "56px !important",
    borderRight: `1px solid ${theme.myColors.colorLinie} !important`,
    height: "92vh",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px !important",
      width: "100vw",
      height: "auto",
    },
  },
  contactBoxMinWidth: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactBoxMaxWidth: {
    display: "none !important",
    [theme.breakpoints.down("md")]: {
      display: "flex !important",
    },
  },
  contactLeftWrap: {
    width: "94vw ",
    background: "transparent !important",
    display: "flex",
    borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    color: `${theme.myColors.whiteColor} !important`,
    fontFamily: "Fira Code !important",
    fontSize: "16px !important",
    fontStyle: "normal",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactRighttext: {
    color: theme.myColors.textColorNav,
    position: "relative",
    left: "164px",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
  contactBoxNoavigation: {
    color: theme.myColors.textColorNav,
    marginTop: "50px !important",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: "240px",
    position: "relative",
    left: "27px",
    borderTop: `1px solid ${theme.myColors.colorLinie} !important`,
    borderBottom: `1px solid ${theme.myColors.colorLinie} !important`,
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: `${theme.myColors.whiteColor} !important`,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "0px !important",
      width: "100%",
      left: "0px",
    },
  },
  //contactForm
  contactFormContainer: {
    position: "relative",
    top: "150px",
    margin: "0 10px",
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "center",
      top: "105px",
      height: "80vh",
    },
    [theme.breakpoints.down("md")]: {
      top: "0px",
      margin: "0 0px",
      height: "auto",
      overflwY: "auto !important",
      marginTop: "10px",
      marginBottom: "100px !important",
    },
  },
  contactFormDivider: {
    position: "relative",
    top: "-45px",
    width: "1px !important",
    height: "90vh",
    background: "#1E2D3D",
    [theme.breakpoints.down("lg")]: {
      top: "0px",
      left: "-10px",
      width: "100% !important",
      height: "1px !important",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactFormWrap: {
    width: "100%",
    maxWidth: "500px",
    [theme.breakpoints.down("xl")]: {
      maxWidth: "350px",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "350px",
    },
  },
  contactFormBtn: {
    width: "50%",
    height: "40px",
    marginTop: 2,
    color: theme.myColors.whiteColor,
    textAlign: "center",
    fontFamily: "Fira Code !important",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    borderRadius: "8px",
    transition: "transform 0.3s ease !important",
    background: `${theme.myColors.colorDarkGrey} !important`,
    "&:hover": {
      transform: "scale(0.97)",
      background: `${theme.myColors.colorDarkGrey} !important`,
    },
    [theme.breakpoints.down("sm")]: {},
  },
  contactFormBoxText: {
    maxWidth: "600px",
    color: "white",
    padding: 2,
    height: "100vh",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
  },

  // Form Styles
  formTextOrange: {
    color: theme.myColors.hoverDownLinie,
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      fontWeight: 400,
      lineHeight: "0%",
    },
  },
  formTextPurple: {
    color: theme.myColors.colorPurpleText,
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      fontWeight: 400,
      lineHeight: "0%",
    },
  },
  formTextPink: {
    color: theme.myColors.colorPinkText,
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      fontWeight: 400,
      lineHeight: "0%",
    },
  },
  formTextGrey: {
    color: theme.myColors.textColorNav,
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "150%",
    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: "0%",
      fontSize: ".7rem",
      fontWeight: 400,
    },
  },
}));

export default usePageStyles;
