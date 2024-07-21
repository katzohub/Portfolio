import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";
// Error Page
export const StyledContainerError = styled(Box)(() => ({
  width: "100vw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledGeneralTextError = styled(Typography)(() => ({
  color: "#607b96",
}));
export const StyledPrimaryTextError = styled(Typography)(() => ({
  color: "#607b96",
}));
// Home Page
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
    height: "100dvh",
    flexDirection: "column",

    alignItems: "center",
    alignContent: "center",

    overflowY: "auto",
    overflowX: "hidden",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
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
    position: "relative",
    top: "56px",
    height: "auto",
    padding: "0px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0 20px",
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
}));
// Shared Page
export const StyledGeneralContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  minHeight: "100dvh",
  backgroundColor: theme.myColors.generalBackground,
}));
// SnakeGame Page
export const StyledContainerGameSnake = styled(Box)(() => ({
  height: "100dvh",
  color: "#fff",
  background: "#dab07a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
// ThankYou Page
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
