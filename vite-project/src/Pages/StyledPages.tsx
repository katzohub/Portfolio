import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";

export const StyledContainerError = styled(Box)(() => ({
  width: "100vw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledGoHomeBtn = styled(Button)(({ theme }) => ({
  width: "auto",
  padding: "0 25px",
  height: "40px",
  marginTop: "10px !important",
  color: theme.myColors.colorFFF,
  background: `${theme.myColors.colorBackInput} !important`,
  textAlign: "center",
  fontFamily: "Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  borderRadius: "8px",
  textTransform: "lowercase",
  "& a": { color: theme.myColors.colorFFF },
}));
export const StyledGeneralTextError = styled(Typography)(() => ({
  color: "#6f88a0 ",
}));
export const StyledPrimaryTextError = styled(Typography)(() => ({
  color: "#6f88a0 ",
}));

export const StyledContainerHome = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  paddingTop: "0px",
  paddingBottom: "0px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "start",
  overflowY: "auto",

  [theme.breakpoints.down("lg")]: {
    display: "flex",
    minheight: "100dvh",
    flexDirection: "column",

    alignItems: "center",
    alignContent: "center",

    overflowY: "auto",
    overflowX: "hidden",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    overflowY: "auto",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: "0px",
  },
}));
export const StyledWrappHome = styled(Box)(({ theme }) => ({
  minHeight: "100dvh",
  width: "100vw",
  maxWidth: "1700px",
  padding: "56px 100px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",

    height: "100%",
  },
  [theme.breakpoints.down("md")]: {
    top: "0px",
    height: "100dvh",
    alignContent: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    zIndex: "5",
    padding: "0px",
  },

  "& .blue": {
    position: "fixed",

    left: "42%",
    transform: "rotate(275deg)",
    width: "700px",
    [theme.breakpoints.down("lg")]: {
      left: "30%",
      bottom: "0%",
      width: "600px",
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {
      width: "350px",
      height: "350px",
      top: "25%",
      left: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      height: "350px",
      top: "25%",
      right: "5%",
    },
  },
  "& .green": {
    position: "fixed",
    left: "20%",
    transform: "rotate(275deg)",
    width: "700px",
    [theme.breakpoints.down("lg")]: {
      width: "600px",
      height: "600px",
      top: "0%",
    },
    [theme.breakpoints.down("md")]: {
      width: "350px",
      height: "350px",
      top: "40%",
      left: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      height: "350px",
      top: "40%",
      left: "-5%",
    },
  },
}));
export const StyledWrapperLeftHome = styled(Box)(({ theme }) => ({
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
    paddingTop: "100px",
    paddingBottom: "100px",
    height: "auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0px 20px",
    marginBlockEnd: "0px",

    alignItems: "center",
    justifyContent: "center",
  },
}));
export const StyledWrapperRightHome = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  maxWidth: "600px",
  position: "relative",
  [theme.breakpoints.down("xl")]: {
    width: "550px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledGeneralContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  minHeight: "100dvh",
  backgroundColor: theme.myColors.generalBackground,
}));

export const StyledContainerGameSnake = styled(Box)(({ theme }) => ({
  height: "100dvh",
  color: "#fff",
  background: theme.myColors.generalBackground,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledContainerThanks = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 20px",
  "& p": {
    color: theme.myColors.textColorNav,
    textAlign: "center",
    fontFamily: "Fira Code",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "450",
    lineHeight: "normal",
  },
}));
export const StyledHeadingThanks = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorFFF,
  textAlign: "center",
  fontFamily: "Fira Code !important",
  fontSize: "26px",
  fontStyle: "normal",
  fontWeight: "450",
  lineHeight: "normal !important",
}));
export const StyledBtnThanks = styled(Button)(({ theme }) => ({
  color: "#FFF",
  textTransform: "lowercase",
  background: `${theme.myColors.colorBackInput} !important`,
  fontFamily: " Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "450",
  lineHeight: "normal !important",
  display: "inlineFlex",
  padding: "10px 14px !important",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px !important",
  marginTop: "25px !important",
}));
StyledContainerError.displayName = "StyledContainerError";
StyledGeneralTextError.displayName = "StyledGeneralTextError";
StyledPrimaryTextError.displayName = "StyledPrimaryTextError";
StyledContainerHome.displayName = "StyledContainerHome";
StyledWrappHome.displayName = "StyledWrappHome";
StyledWrapperLeftHome.displayName = "StyledWrapperLeftHome";
StyledWrapperRightHome.displayName = "StyledWrapperRightHome";
StyledGeneralContainer.displayName = "StyledGeneralContainer";
StyledContainerGameSnake.displayName = "StyledContainerGameSnake";
StyledContainerThanks.displayName = "StyledContainerThanks";
StyledHeadingThanks.displayName = "StyledHeadingThanks";
StyledBtnThanks.displayName = "StyledBtnThanks";
