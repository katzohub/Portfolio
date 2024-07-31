import { styled } from "@mui/system";
import {
  Button,
  ListItemButton,
  ListItemText,
  Link,
  ListItem,
  List,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// Styled components for BigButton
export const StyledBigButton = styled(Button)(({ theme }) => ({
  display: "inline-block",
  cursor: "pointer",
  outline: "none",
  border: 0,
  verticalAlign: "middle",
  textDecoration: "none",
  fontSize: "inherit",
  fontFamily: `"Fira Code","Poppins", sans-serif`,
  width: "100%",
  position: "relative",
  zIndex: 555,
  "&.learn-more": {
    fontWeight: 600,
    color: theme.myColors.textColorNav,
    textTransform: "uppercase",
    padding: "1.25em 2em",
    background: theme.myColors.generalBackground,

    border: `2px solid ${theme.myColors.colorInputSend}`,
    borderRadius: "0.75em",
    transformStyle: "preserve-3d",
    transition:
      "transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1)",
    "&::before": {
      position: "absolute",
      content: '""',
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.myColors.colorInputSend,
      borderRadius: "inherit",
      boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0.625em 0 0 transparent`,
      transform: "translate3d(0, 0.75em, -1em)",
      transition:
        "transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1)",
    },
    "&:hover": {
      transform: "translate(0, 0.25em)",
      color: `${theme.myColors.whiteColor} !important`,
      "&::before": {
        boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0.5em 0 0 transparent`,
        transform: "translate3d(0, 0.5em, -1em)",
      },
    },
    "&:active": {
      background: theme.myColors.colorInputSend,
      transform: "translate(0em, 0.75em)",
      "&::before": {
        boxShadow: `0 0 0 2px ${theme.myColors.colorInputSend}, 0 0 ${theme.myColors.colorInputSend}`,
        transform: "translate3d(0, 0, -1em)",
      },
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    "&.learn-more": {
      padding: "0.75em 1.5em",
    },
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    "&.learn-more": {
      padding: "0.75em 1.5em",
    },
  },
}));
// Styled components for ButtonCollapse
export const StyledListButtonsCollapse = styled(ListItemButton)(
  ({ theme }) => ({
    marginTop: "50px !important",
    fontFamily: `"Fira Code","Poppins", sans-serif`,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: "234px",
    position: "relative",
    left: "35px",
    borderTop: `2px solid ${theme.myColors.colorLinie} !important`,
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,

    padding: "8px 16px 8px 0px",

    "&:hover": {
      transition: "color 0.3s ease-in",
      color: `${theme.myColors.colorFFF} !important`,
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "2.5px",
      borderTop: "none !important",
      marginTop: "0px !important",
      width: "100%",
      left: "0px",
    },
  })
);
export const StyledBtnText = styled(ListItemText)(() => ({
  paddingLeft: "10px",
}));
export const StyledCollapseAll = styled(ListItemText)(() => ({
  paddingLeft: "10px",
}));
export const StyledCollapseButton = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  left: "25px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    left: "0px",
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
    [theme.breakpoints.down("md")]: { paddingLeft: "35px" },
  },
}));
export const StyledEmailIcon = styled(EmailIcon)(() => ({
  position: "relative",
  left: "-10px",
}));
export const StyledPhoneButton = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  left: "25px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    left: "0px",
    paddingLeft: "35px",
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
  },
}));
export const StyledIconPhone = styled(LocalPhoneIcon)(() => ({
  position: "relative",
  left: "-10px",
}));

export const StyledBtnInstagram = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  left: "25px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "25px",
    width: "100%",
    left: "0px",
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
  },
}));
export const StyledTextInstagram = styled(ListItemText)(() => ({
  paddingLeft: "10px",
}));
export const StyledTextNavigate = styled(Link)(({ theme }) => ({
  display: "flex",
  width: "90vw",
  justifyContent: "center",
  textDecoration: "none",

  color: theme.myColors.colorNonActive,
  [theme.breakpoints.down("md")]: {
    left: "0px",
    width: "100%",
  },
}));

export const StyledTextNavigateContact = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.myColors.colorNonActive,
  width: "100%",
  paddingLeft: "10px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
  },
}));
// Styled components for Dropdownbuttons
export const StyledListDropDown = styled(List)(({ theme }) => ({
  paddingTop: "0px !important",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: "0px !important",
  },
}));
export const StyledListItemContainer = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },

  "&:hover": {
    transition: "color 0.3s ease-in",
    color: "#fff",
    ".MuiListItemText-primary": {
      color: "#fff",
      transition: "color 0.3s ease-in",
    },
    "& svg": { color: "#fff", transition: "color 0.3s ease-in" },
  },
}));
// Display name for components
StyledBigButton.displayName = "StyledBigButton";
StyledListButtonsCollapse.displayName = "StyledListButtonsCollapse";
StyledBtnText.displayName = "StyledBtnText";
StyledCollapseAll.displayName = "StyledCollapseAll";
StyledCollapseButton.displayName = "StyledCollapseButton";
StyledEmailIcon.displayName = "StyledEmailIcon";
StyledPhoneButton.displayName = "StyledPhoneButton";
StyledIconPhone.displayName = "StyledIconPhone";
StyledBtnInstagram.displayName = "StyledBtnInstagram";
StyledTextInstagram.displayName = "StyledTextInstagram";
StyledTextNavigate.displayName = "StyledTextNavigate";
StyledTextNavigateContact.displayName = "StyledTextNavigateContact";
StyledListDropDown.displayName = "StyledListDropDown";
StyledListItemContainer.displayName = "StyledListItemContainer";
