import { styled } from "@mui/system";
import {
  Box,
  Typography,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

// Styled components for AboutCOntent
export const StyledAboutContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100dvh",
  paddingTop: "112px",
  paddingBottom: "100px",
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
    left: "61%",
    transform: "translateX(-61%)",
  },
  [theme.breakpoints.down("lg")]: {
    left: "-1.75%",
    transform: "translateX(-1.75%)",
    border: `0.5px solid ${theme.myColors.colorLinie} !important`,
    position: "relative",
    top: "13px",
    width: "100% !important",
    height: "2px",
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
  paddingLeft: "20px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "30px !important",
    paddingLeft: "0px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "60px !important",
  },

  [theme.breakpoints.down(525)]: {
    padding: "120px 10px 0 10px !important",
  },
}));
export const StyledAboutWrappRight = styled(Box)(({ theme }) => ({
  borderRadius: "15px !important",
  border: `2px solid ${theme.myColors.colorLinie}`,
  background: theme.myColors.colorInCard,
  padding: "7px 12.5px !important",

  [theme.breakpoints.down("lg")]: {
    width: "491px !important",
  },
  [theme.breakpoints.down(525)]: {
    width: "100% !important",
    display: "flex",
    justifyContent: "center !important",
    padding: "2.5px !important",
  },
}));
export const StyledAboutText = styled(Box)(({ theme }) => ({
  width: "max-content",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 2.5px",
  },
  "& span": {
    fontSize: "clamp(10px, 1vw, 14px) !important",
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    fontFamily: `"Fira Code","Poppins", sans-serif`,
    fontStyle: "normal !important",
    lineHeight: "150% !important",
    fontWeight: "600 !important",
    [theme.breakpoints.down("xl")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
}));
export const StyledAboutTextWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",

  [theme.breakpoints.down(525)]: {
    flexDirection: "column",
  },
}));
export const StyledAboutTextGray = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorGreyText,
}));
export const StyledAboutTextGrayNone = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorGreyText,
  [theme.breakpoints.down(525)]: {
    display: "none",
  },
}));
export const StyledAboutTextPink = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorPinkText,
}));
export const StyledAboutTextPurple = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorPurpleText,
  fontFamily: `"Fira Code","Poppins", sans-serif`,
}));
export const StyledAboutTextOrange = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorOrangeText,
}));
export const StyledAboutNextText = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex !important",

  [theme.breakpoints.down(525)]: {
    flexDirection: "column",
  },
}));
export const StyledAboutCodeWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(525)]: { paddingLeft: "48px" },
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

// Styled components for TemplateAbout
export const StyledAboutTemplateContainer = styled(Box)(({ theme }) => ({
  color: theme.myColors.textColorNav,
  fontFamily: `"Fira Code","Poppins", sans-serif`,
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 450,
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "15px",
  },
  "& p": {
    fontSize: "clamp(12px, 1vw, 16px)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    [theme.breakpoints.down(525)]: {
      fontSize: "15px",
      whiteSpace: "wrap",
      overflow: "auto",
      padding: "0 10px",
    },
  },
  "& span": {
    fontSize: "clamp(12px, 1vw, 16px)",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));
// Styled components for AboutSidebar
export const StyledAboutSidebarContainer = styled(Box)(({ theme }) => ({
  paddingLeft: "35px",
  [theme.breakpoints.down("md")]: { paddingLeft: "0" },
}));
export const StyledAboutIconBio = styled(FolderIcon)(({ theme }) => ({
  color: `${theme.myColors.colorLightOrange} !important`,
}));
export const StyledAboutIconInterest = styled(FolderIcon)(({ theme }) => ({
  color: `${theme.myColors.colorLightGreen} !important`,
}));
export const StyledAboutIconRoute = styled(FolderIcon)(() => ({
  color: "#e60000 !important",
}));
export const StyledAboutItemBtn = styled(ListItemButton)(({ theme }) => ({
  padding: "8px 16px 8px 0px",

  "&:hover": {
    transition: "color 0.3s ease-in",
    color: `${theme.myColors.colorFFF} !important`,
  },
  [theme.breakpoints.down("md")]: {
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
    paddingLeft: "2.5px",
  },
}));
export const StyledAboutIconEducation = styled(FolderIcon)(({ theme }) => ({
  color: `${theme.myColors.colorPurpleFolder} !important`,
}));
export const StyledAboutBtnText = styled(ListItemText)(() => ({
  fontFamily: `"Fira Code","Poppins", sans-serif`,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  position: "relative",
  top: "1px",
  left: "-20px",
}));
export const StyledAboutCollapseList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const StyledAboutItemBtnNav = styled(ListItemButton)(({ theme }) => ({
  width: "100%",
  padding: "8px 16px 8px 0px",

  [theme.breakpoints.down("md")]: {
    paddingLeft: "2.5px",
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
  },
  "&:hover": {
    transition: "color 0.3s ease-in",
    color: `${theme.myColors.colorFFF} !important`,
  },
}));

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
StyledAboutTemplateContainer.displayName = "StyledAboutTemplateContainer";
StyledAboutSidebarContainer.displayName = "StyledAboutSidebarContainer";
StyledAboutIconBio.displayName = "StyledAboutIconBio";
StyledAboutIconInterest.displayName = "StyledAboutIconInterest";
StyledAboutItemBtn.displayName = "StyledAboutItemBtn";
StyledAboutIconEducation.displayName = "StyledAboutIconEducation";
StyledAboutBtnText.displayName = "StyledAboutBtnText";
StyledAboutCollapseList.displayName = "StyledAboutCollapseList";
StyledAboutItemBtnNav.displayName = "StyledAboutItemBtnNav";
