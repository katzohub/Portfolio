import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const StyledNavContainer = styled(Box)(({ theme }) => ({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  "& .top-container": {
    position: "absolute",
    top: "0",
    width: "95%",
    borderBlockEnd: `2px solid ${theme.myColors.colorLinie}`,
    height: "56px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    background: `${theme.myColors.generalBackground} !important`,
    zIndex: "998",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  "& .bottom-container": {
    position: "absolute",
    bottom: "0",
    width: "95%",
    height: "56px",
    borderTop: `2px solid ${theme.myColors.colorLinie}`,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    background: theme.myColors.generalBackground,
    zIndex: "998",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export const StyledNavLink = styled(Typography)(({ theme }) => ({
  fontFamily: `"Fira Code","Poppins", sans-serif`,
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
}));
export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "absolute",
    right: "10px",
    height: "56px",
    borderLeft: `2px solid ${theme.myColors.colorLinie}`,
    paddingLeft: "10px",
    fontSize: "2.2rem",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    color: theme.myColors.textColorNav,
    "&:hover": {
      transition: "color 0.3s",
      color: theme.myColors.colorFFF,
    },
  },
}));
StyledNavContainer.displayName = "StyledNavContainer";
StyledNavLink.displayName = "StyledNavLink";
StyledMenuIcon.displayName = "StyledMenuIcon";
