import { styled } from "@mui/system";
import {
  Box,
  Grid,
  Button,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

// Styled SkillsAlert
export const StyledContainerAlert = styled(Box)(({ theme }) => ({
  "& h1": {
    textAlign: "center",
    position: "absolute",
    top: "35%",
    left: "50%",
    width: "350px",
    height: "250px",
    color: "#fff",
    fontFamily: "Fira Code",
    fontStyle: "normal",
    fontWeight: 450,
    [theme.breakpoints.down("md")]: {
      transform: "translate(-50%, -50%)",
      paddingTop: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "175px",
      fontSize: "1.25rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: "1rem !improtant",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      marginTop: "50px",
    },
  },
}));
// Styled SkillsContent
export const StyledSkillsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    overflowY: "auto",
  },
}));

export const StyledSkillsWrapp = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "122px",
  left: "0px",
  height: "83dvh",
  width: "100%",
  maxWidth: "1450px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    overflowY: "auto",
  },

  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: "0px",
    left: "0px",
    height: "100%",
    marginBottom: "100px",
    overflowX: "hidden !important",
  },
}));
export const StyledSkillsWrapper = styled(Box)(() => ({
  width: "100%",
  padding: "0 10px",
  margin: "0 10px",
}));
export const StyledSkillsGridContainer = styled(Grid)(({ theme }) => ({
  paddingBottom: "120px",
  position: "relative",
  left: "-8px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "0px",
    padding: "0 20px",
  },
}));
export const StyledSkillsGridWrapp = styled(Grid)(({ theme }) => ({
  paddingBottom: "120px",
  position: "relative",
  left: "-8px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "0px",
    padding: "0 20px",
  },
}));
export const StyledSkillsGridWrapper = styled(Grid)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down(800)]: {
    marginTop: "10px",
  },
}));
export const StyledSkillsCard = styled(Box)(({ theme }) => ({
  borderRadius: "15px",
  border: `2px solid ${theme.myColors.colorLinie} `,
  background: theme.myColors.colorInCard,
  maxWidth: "100%",
  height: "420px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
  "& img": {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
}));
export const StyledSkillCardHeading = styled(Box)(({ theme }) => ({
  padding: "10px",
  "& h2": {
    color: "#fff",
    fontFamily: "Fira Code",
    fontStyle: "normal",
    lineHeight: "normal",
    fontSize: "16px",
    fontWeight: "600 !important",
  },
  "& p": {
    marginTop: "5px",
    color: theme.myColors.colorTextCard,
    fontFamily: "Fira Code",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
  },
}));
export const StyledSkillCardContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "15px",
  top: "25px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  background: theme.myColors.colorDarkBlack,
  padding: "5px 10px",
  borderRadius: "10px",
}));
export const StyledSkillCardIconWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const StyledSkillCardBtn = styled(Button)(({ theme }) => ({
  position: "absolute",
  left: "25px",
  bottom: "15px",
  transition: "transform 0.3s ease !important",
  background: `${theme.myColors.colorLinie} !important`,
  "&:hover": {
    transform: "scale(0.95)",
  },
  "& a": {
    color: theme.myColors.whiteColor,
    fontFamily: "Fira Code",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "normal",
    textDecoration: "none",
    textTransform: "lowercase",
  },
}));
// Styled SkillsSidebar
export const StyledSkillsRightForm = styled(FormGroup)(({ theme }) => ({
  marginLeft: "60px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row !important",
    position: "relative",
    marginLeft: "0px",
    margin: "0 !important",
    padding: "0 10px !important",
  },
}));
export const StyledSkillsLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.myColors.textColorNav,
}));
export const StyledSkillsCheckbox = styled(Checkbox)(({ theme }) => ({
  "& .MuiSvgIcon-root": { color: theme.myColors.textColorNav },
}));
export const StyledSkillsListItem = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.myColors.colorFFF,
    transition: "color 0.3s ease-in",
  },
}));
export const StyledCategoryIcon = styled(CategoryIcon)(() => ({
  marginRight: "15px",
  position: "relative",
  top: "2px",
  left: "5px",
}));
export const StyledSkillsRowLabel = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.myColors.colorFFF,
    transition: "color 0.3s ease-in",
  },
  "& .label-icon": {
    marginRight: "15px",
    position: "relative",
    top: "2px",
    left: "5px",
  },
}));
export const StyledSkillsBoxDividerTop = styled(Divider)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "absolute",
    bottom: "0px",
    left: "-10px",
    background: `${theme.myColors.colorLinie} !important`,
    height: "2px !important",
    width: "100vw !important",
  },
}));
StyledContainerAlert.displayName = "StyledContainerAlert";
StyledSkillsContainer.displayName = "StyledSkillsContainer";
StyledSkillsWrapp.displayName = "StyledSkillsWrapp";
StyledSkillsWrapper.displayName = "StyledSkillsWrapper";
StyledSkillsGridContainer.displayName = "StyledSkillsGridContainer";
StyledSkillsGridWrapp.displayName = "StyledSkillsGridWrapp";
StyledSkillsGridWrapper.displayName = "StyledSkillsGridWrapper";
StyledSkillsCard.displayName = "StyledSkillsCard";
StyledSkillCardHeading.displayName = "StyledSkillCardHeading";
StyledSkillCardContainer.displayName = "StyledSkillCardContainer";
StyledSkillCardIconWrap.displayName = "StyledSkillCardIconWrap";
StyledSkillCardBtn.displayName = "StyledSkillCardBtn";
StyledSkillsRightForm.displayName = "StyledSkillsRightForm";
StyledSkillsLabel.displayName = "StyledSkillsLabel";
StyledSkillsCheckbox.displayName = "StyledSkillsCheckbox";
StyledSkillsListItem.displayName = "StyledSkillsListItem";
StyledCategoryIcon.displayName = "StyledCategoryIcon";
StyledSkillsRowLabel.displayName = "StyledSkillsRowLabel";
StyledSkillsBoxDividerTop.displayName = "StyledSkillsBoxDividerTop";
