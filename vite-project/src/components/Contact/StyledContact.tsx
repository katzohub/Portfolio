import { styled } from "@mui/system";
import {
  ListItemButton,
  Divider,
  ListItem,
  Link,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
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
// Styled components for ContactForm
export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: theme.myColors.colorFFF,
  },
  "& label": {
    color: theme.myColors.colorFFF,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.myColors.colorInputSend,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.myColors.colorBackInput,
    },
    "&:hover fieldset": {
      borderColor: theme.myColors.colorInputSend,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.myColors.colorInputSend,
    },
    backgroundColor: theme.myColors.colorBackInput,
    boxShadow: theme.myShadow.shadowTextField,
  },
  "& .MuiInputBase-input": {
    color: theme.myColors.colorFFF,
    backgroundColor: theme.myColors.colorBackInput,
  },
}));
export const StyledContactFormContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "100px",
  width: "100%",
  height: "auto",
  display: "flex",
  overflowY: "hidden",
  justifyContent: "space-evenly",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "142px",
    paddingBottom: "100px",
    overflowY: "auto",
    minHeight: "80dvh",
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    width: "100%",
    minHeight: "auto",
    paddingTop: "50px",
    overflowY: "visible",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));
export const StyledContactFormWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  position: "relative",
  top: "15px",
  [theme.breakpoints.down("xl")]: {
    maxWidth: "350px",
  },
  [theme.breakpoints.down("lg")]: {
    top: "-30px",
    maxWidth: "450px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "350px",
  },
}));
export const StyledContactFormDivider = styled(Divider)(({ theme }) => ({
  width: "2px",
  border: `1px solid ${theme.myColors.colorLinie} !important`,
  height: "100%",
  zIndex: 10,
  background: theme.myColors.colorLinie,

  [theme.breakpoints.down("lg")]: {
    left: "-1.84%",
    transform: "translateX(-1.84%)",
    position: "relative",
    top: "0px",
    width: "100% !important",
    height: "1px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledSubmitFormBtn = styled(Button)(({ theme }) => ({
  width: "50%",
  height: "40px",
  marginTop: "10px !important",
  color: theme.myColors.whiteColor,
  textAlign: "center",
  fontFamily: "Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  borderRadius: "8px",
  transition: "all .3s ease-in-out",
  textTransform: "lowercase",
  background: `${theme.myColors.colorBackInput} !important`,
  "&:hover": {
    transform: "scale(1.03)",
    background: `${theme.myColors.colorBackInput} !important`,
  },
}));
export const StyledFormTextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  color: "white",
  padding: 2,
  height: "100dvh",
  [theme.breakpoints.down("lg")]: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& p": {
      width: "350px",
    },
  },
}));
export const StyledTextGray = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorGreyText,
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
    fontSize: "11px",
  },
}));
export const StyledTextPink = styled(Typography)(({ theme }) => ({
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
    fontSize: "11px",
  },
}));
export const StyledTextOrange = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorOrangeText,
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
    fontSize: "11px",
  },
}));
export const StyledTextPurple = styled(Typography)(({ theme }) => ({
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
    fontSize: "11px",
  },
}));
StyledContactBtnContainer.displayName = "StyledContactBtnContainer";
StyledContactDivider.displayName = "StyledContactDivider";
StyledContactBtnOpenFind.displayName = "StyledContactBtnOpenFind";
StyledContactListItem.displayName = "StyledContactListItem";
StyledShareIcon.displayName = "StyledShareIcon";
StyledLeftContactBtn.displayName = "StyledLeftContactBtn";
StyledNavigateText.displayName = "StyledNavigateText";
StyledTextField.displayName = "StyledTextField";
StyledContactFormContainer.displayName = "StyledContactFormContainer";
StyledContactFormWrap.displayName = "StyledContactFormWrap";
StyledContactFormDivider.displayName = "StyledContactFormDivider";
StyledSubmitFormBtn.displayName = "StyledSubmitFormBtn";
StyledFormTextContainer.displayName = "StyledFormTextContainer";
StyledTextGray.displayName = "StyledTextGray";
StyledTextPink.displayName = "StyledTextPink";
StyledTextOrange.displayName = "StyledTextOrange";
StyledTextPurple.displayName = "StyledTextPurple";
