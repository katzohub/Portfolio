import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const StyledAboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  paddingTop: "112px",
  paddingBottom: "160px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "start",
  overflowY: "auto",

  [theme.breakpoints.down("lg")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflowY: "auto",
    overflowX: "hidden",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: "0px",
  },
}));

export const StyledAboutContainerTemplate = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "15px",
}));
export const StyledAboutWrappTemplate = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "relative",
    top: "-50px",
    color: theme.myColors.textColorNav,
  },
  [theme.breakpoints.down(555)]: {
    left: "0px",
  },
}));
export const StyledAboutDivider = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "2px",
  border: `1px solid ${theme.myColors.colorLinie} !important`,
  height: "100%",
  zIndex: 10,
  background: theme.myColors.colorLinie,
  [theme.breakpoints.down(1300)]: {
    left: "63.5%",
    transform: "translateX(-63.5%)",
  },
  [theme.breakpoints.down("lg")]: {
    left: "-1.75%",
    transform: "translateX(-1.75%)",
    border: `0.5px solid ${theme.myColors.colorLinie} !important`,
    position: "relative",
    top: "13px",
    width: "100% !important",
    height: "1px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledAboutContainerRight = styled(Box)(({ theme }) => ({
  color: "white",
  width: "100%",
  display: "flex !important",
  flexDirection: "column",
  alignItems: "center !important",
  justifyContent: "start !important",
  paddingTop: "15px !important",
  alignContent: "center !important",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "30p !important",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "120px 10px 0 10px !important",
  },
}));
export const StyledAboutWrappRight = styled(Box)(({ theme }) => ({
  borderRadius: "15px !important",
  border: `2px solid ${theme.myColors.colorLinie}`,
  background: theme.myColors.colorInCard,
  padding: "7px 12.5px !important",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    display: "flex",
    justifyContent: "center !important",
    padding: "2.5px !important",
  },
}));
export const StyledAboutText = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    padding: "2.5px",
  },
  "& span": {
    fontSize: "clamp(10px, 1vw, 14px) !important",
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    fontFamily: "Fira Code !important",
    fontStyle: "normal !important",
    fontWeight: "450 !important",
    lineHeight: "150% !important",
    [theme.breakpoints.down("xl")]: {
      fontWeight: "600 !important",
      fontSize: "11px !important",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "11px !important",
    },
  },
}));
export const StyledAboutTextWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export const StyledAboutTextGray = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorGreyText,
}));
export const StyledAboutTextGrayNone = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorGreyText,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const StyledAboutTextPink = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorPinkText,
}));
export const StyledAboutTextPurple = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorPurpleText,
  fontFamily: "Fira Code !important",
}));
export const StyledAboutTextOrange = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorOrangeText,
}));
export const StyledAboutNextText = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex !important",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export const StyledAboutCodeWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { paddingLeft: "48px" },
}));
export const StyledAboutImgContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "50px",
  borderRadius: "15px",
  border: `2px solid ${theme.myColors.colorLinie}`,
  background: theme.myColors.colorInCard,
  padding: "15px 20px",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("xl")]: {
    top: "15px",
  },
  "& img": {
    width: "225px",
    [theme.breakpoints.down("lg")]: {
      width: "150px",
    },
  },
}));

// Display name for components
StyledAboutContainer.displayName = "StyledAboutContainer";
StyledAboutContainerTemplate.displayName = "StyledAboutContainerTemplate";
StyledAboutWrappTemplate.displayName = "StyledAboutWrappTemplate";
StyledAboutDivider.displayName = "StyledAboutDivider";
StyledAboutContainerRight.displayName = "StyledAboutContainerRight";
StyledAboutWrappRight.displayName = "StyledAboutWrappRight";
StyledAboutText.displayName = "StyledAboutText";
StyledAboutTextWrap.displayName = "StyledAboutTextWrap";
StyledAboutTextGray.displayName = "StyledAboutTextGray";
StyledAboutTextGrayNone.displayName = "StyledAboutTextGrayNone";
StyledAboutTextPink.displayName = "StyledAboutTextPink";
StyledAboutTextPurple.displayName = "StyledAboutTextPurple";
StyledAboutTextOrange.displayName = "StyledAboutTextOrange";
StyledAboutNextText.displayName = "StyledAboutNextText";
StyledAboutCodeWrapper.displayName = "StyledAboutCodeWrapper";
StyledAboutImgContainer.displayName = "StyledAboutImgContainer";