import { styled } from "@mui/system";
import { ListItemButton, Divider, ListItem, Link } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

// Styled components for ContactCollapse
export const StyledContactBtnContainer = styled(ListItemButton)(
  ({ theme }) => ({
    display: "none !important",

    [theme.breakpoints.down("md")]: {
      display: "flex !important",
    },
    "&:hover": {
      color: "#fff !important",
      transition: "color 0.2s ease-in",
    },
  })
);
export const StyledContactDivider = styled(Divider)(({ theme }) => ({
  position: "relative",
  top: "25px",
  left: "-40px",
  background: theme.myColors.colorLinie,
  height: "2px",
  zIndex: 9,
  width: "100vw",
}));
export const StyledContactBtnOpenFind = styled(ListItemButton)(({ theme }) => ({
  marginTop: "50px !important",
  fontFamily: "Fira Code",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  width: "240px",
  position: "relative",
  left: "27px",
  borderTop: `2px solid ${theme.myColors.colorLinie} !important`,
  borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,

  "&:hover": {
    transition: "color 0.3s ease-in",
    color: `${theme.myColors.whiteColor} !important`,
  },

  [theme.breakpoints.down("md")]: {
    marginTop: "0px !important",
    width: "100%",
    left: "0px",
  },
}));
export const StyledContactListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  "&:hover": {
    color: "#fff",
    transition: "color 0.3s ease-in",
    ".MuiListItemText-primary": {
      color: "#fff",
      transition: "color 0.3s ease-in",
    },
    "& svg": {
      color: "#fff",
      transition: "color 0.3s ease-in",
    },
  },
}));
export const StyledShareIcon = styled(ShareIcon)(() => ({
  position: "relative",
  left: "-10px",
}));
export const StyledLeftContactBtn = styled(ListItemButton)(({ theme }) => ({
  position: "relative",
  left: "25px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    left: "0px",
    borderBottom: `2px solid ${theme.myColors.colorLinie} !important`,
  },
}));
export const StyledNavigateText = styled(Link)(({ theme }) => ({
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
