import { styled } from "@mui/system";
import {
  Box,
  ListSubheader,
  Drawer,
  List,
  ListItem,
  IconButton,
  Grid,
  ListItemButton,
  ListItemIcon,
  Link,
  Switch,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// GeneralBox styled
export const StyledComponentsContainer = styled(Box)(({ theme }) => ({
  overflowY: "hidden",
  [theme.breakpoints.down("md")]: {
    overflowY: "auto !important",
    overflowX: "hidden !important",
    height: "calc(100dvh - 56px - 56px)",
    marginTop: "0px",
    marginBottom: "0px",
    position: "relative",
    top: "56px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const StyledComponentsWrapper = styled(Box)(({ theme }) => ({
  width: "269px",
  paddingTop: "56px !important",
  position: "relative",
  height: "auto",
  zIndex: 99,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    paddingTop: "0px !important",
    borderRight: `0px solid transparent !important`,
  },
}));
export const StyledComponentsContentContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "56px",
  fontFamily: `"Fira Code","Poppins", sans-serif`,
  display: "flex",
  justifyContent: "center",
  color: `${theme.myColors.colorFFF} !important`,
  fontSize: "16px !important",
  fontStyle: "normal",
  position: "relative",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    width: "auto !important",
    borderBottom: `2px solid transparent`,
    left: "0px",
    display: "none",
  },
}));
export const StyledComponentsDivider = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "0px",
  top: "0px",
  width: "2px",
  border: `0px solid ${theme.myColors.colorLinie} !important`,
  height: "100vh",
  zIndex: 999,
  background: theme.myColors.colorLinie,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledComponentsGeneralContainer = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "100%",
  background: theme.myColors.generalBackground,
  zIndex: 500,
  borderBottom: `2px solid ${theme.myColors.colorLinie}`,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const StyledComponentsGeneralBoxHeading = styled(Box)(() => ({
  width: "232px",
}));
export const StyledComponentsGeneralBoxText = styled(Box)(() => ({
  position: "absolute",
  left: "285px",
}));
export const StyledComponentsGeneralContainerMinWidth = styled(ListSubheader)(
  ({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      position: "relative !important",
      paddingLeft: "10px",
      color: `${theme.myColors.colorFFF} !important`,
      background: `${theme.myColors.colorDarkBlack} !important`,
      borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,

      fontFamily: `"Fira Code","Poppins", sans-serif`,
      fontSize: "16px !important",
      fontStyle: "normal",
      fontWeight: 400,
      cursor: "default !important",
      height: "56px",
      alignItems: "center",
    },
  })
);

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  zIndex: 999999,
  "& .MuiDrawer-paperAnchorRight": {
    backgroundColor: theme.myColors.colorDarkBlue,
  },
}));
export const StyledDrawerListContainer = styled(List)(() => ({
  position: "relative",
  height: "100%",
}));
export const StyledDrawerListItems = styled(ListItem)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const StyledDrawerIcenBtn = styled(IconButton)(({ theme }) => ({
  position: "relative",
  left: "-10px",
  cursor: "pointer",
  color: `${theme.myColors.textColorNav} !important`,
  background: "transparent",
  "&:hover, &:focus": {
    transition: "color .2s,background .2s",
    color: `${theme.myColors.whiteColor} !important`,
    background: "rgba(255, 255, 255, 0.08)",
  },
}));
// Navigation styled
export const StyledNavigationContianer = styled(Grid)(({ theme }) => ({
  width: "100%",
  "& .navigation-top-contianer": {
    display: "flex !important",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  "& .navigation-bottom-contianer": {
    display: "flex !important",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      position: "absolute",
      right: "0",
      top: "0",
    },
  },
}));
export const StyledNavigationTopWrapp = styled(ListItemButton)(({ theme }) => ({
  fontFamily: `"Fira Code","Poppins", sans-serif`,
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
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,

    "&:last-child": {
      borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
      borderRight: "none",
      borderLeft: "none !important",
      position: "relative",
    },
    "&.active": {
      color: `${theme.myColors.colorTextLink} !important`,
      borderBottom: `4px solid ${theme.myColors.colorBottomNavLink} !important`,
    },
    "&:first-of-type": {
      borderTop: `2px solid ${theme.myColors.colorLinie} !important`,
    },
    "&:hover": {
      background: "rgba(255, 255, 255, 0.08) !important",
    },
  },
}));
export const StyledNavigationIconMinScreen = styled(ListItemIcon)(
  ({ theme }) => ({
    display: "none !important",
    [theme.breakpoints.down("md")]: {
      display: "flex !important",
      fontSize: "1.25rem",
      width: "auto !important",
      padding: "0 !important",
      fontFamily: `"Fira Code","Poppins", sans-serif`,
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
  })
);
export const StyledNavigationLinkMinScreen = styled(Link)(({ theme }) => ({
  fontFamily: `"Fira Code","Poppins", sans-serif`,
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
    "&:first-of-type": {
      borderLeft: `2px solid ${theme.myColors.colorLinie}`,
    },
  },
}));
// SwitchButton styled
export const StyledSwitchBtnContianer = styled(Grid)(({ theme }) => ({
  height: "100%",
  borderRight: `2px solid ${theme.myColors.colorLinie}`,
  padding: "0 7.5px",
}));
export const StyledSwitchBtnWrapp = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
}));
export const StyledSwitchLanguage = styled(Switch)(() => ({
  transform: "scale(1.3)",
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#092E40 !important",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#FCE8B3 !important",
  },
}));
// Switch Container styled
export const StyledLightModeIcon = styled(LightModeIcon)(() => ({
  color: "#fff",
  background: "#F2C039",
  borderRadius: "50%",
  padding: "4px",
  width: "20px !important",
  height: "20px !important",
}));
export const StyledDarkModeIcon = styled(DarkModeIcon)(() => ({
  color: "#fff",
  background: "#25AFEE",
  borderRadius: "50%",
  padding: "4px",
  width: "20px !important",
  height: "20px !important",
}));
// TemplareRow styled
export const StyledRow = styled(Typography)(() => ({
  display: "flex",
}));
export const StyledRowWithin = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(13px, 1vw, 16px)",
  [theme.breakpoints.down(525)]: {
    display: "none",
  },
}));
StyledComponentsContainer.displayName = "StyledComponentsContainer";
StyledComponentsWrapper.displayName = "StyledComponentsWrapper";
StyledComponentsDivider.displayName = "StyledComponentsDivider";
StyledComponentsGeneralContainer.displayName =
  "StyledComponentsGeneralContainer";
StyledComponentsGeneralBoxHeading.displayName =
  "StyledComponentsGeneralBoxHeading";
StyledComponentsGeneralBoxText.displayName = "StyledComponentsGeneralBoxText";
StyledComponentsGeneralContainerMinWidth.displayName =
  "StyledComponentsGeneralContainerMinWidth";
StyledDrawer.displayName = "StyledDrawer";
StyledDrawerListContainer.displayName = "StyledDrawerListContainer";
StyledDrawerListItems.displayName = "StyledDrawerListItems";
StyledDrawerIcenBtn.displayName = "StyledDrawerIcenBtn";
StyledNavigationContianer.displayName = "StyledNavigationContianer";
StyledNavigationTopWrapp.displayName = "StyledNavigationTopWrapp";
StyledNavigationIconMinScreen.displayName = "StyledNavigationIconMinScreen";
StyledNavigationLinkMinScreen.displayName = "StyledNavigationLinkMinScreen";
StyledSwitchBtnContianer.displayName = "StyledSwitchBtnContianer";
StyledSwitchBtnWrapp.displayName = "StyledSwitchBtnWrapp";
StyledSwitchLanguage.displayName = "StyledSwitchLanguage";
StyledLightModeIcon.displayName = "StyledLightModeIcon";
StyledDarkModeIcon.displayName = "StyledDarkModeIcon";
StyledRow.displayName = "StyledRow";
StyledRowWithin.displayName = "StyledRowWithin";
StyledComponentsContentContainer.displayName =
  "StyledComponentsContentContainer";
