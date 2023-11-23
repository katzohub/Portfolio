import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
// #
const usePageStyles = makeStyles((theme: Theme) => ({
  //AboutMe
  aboutHoverBtnEffect: {
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: "#fff !important",
    },
  },
  aboutContainer: {
    width: "100%",
    display: "flex",
  },
  aboutLeftNavContainer: {
    width: "267px",
    marginTop: "56px !important",
    borderRight: "2px solid #1E2D3D",
    height: "95vh",
  },
  aboutLeftWrap: {
    width: "94vw !important",
    background: "transparent !important",
    display: "flex",
    borderBottom: "1px solid #1E2D3D",
    left: "30px",
    color: `${theme.myColors.whiteColor} !important`,
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  aboutTextRight: {
    color: "#607B96",
    position: "relative",
    left: "150px",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  aboutBtnStyle: {
    color: "#607B96 !important",
    "&:hover": {
      color: "#fff !important",
    },
  },
  aboutIconBio: {
    color: "#E99287 !important",
  },
  aboutIconInterest: {
    color: "#43D9AD !important",
  },
  aboutIconEducation: {
    color: "#3A49A4 !important",
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
      color: "#fff !important",
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
    //   color: "#607B96 !important",
    marginTop: "100px !important",
    fontFamily: "Fira Code",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: "240px",
    position: "relative",
    left: "27px",
    borderTop: "1px solid #1E2D3D !important",
    borderBottom: "1px solid #1E2D3D !important",
    "&:hover": {
      transition: "color 0.3s ease-in",
      color: "#fff !important",
    },
  },

  //Project
  //ContactMe

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
