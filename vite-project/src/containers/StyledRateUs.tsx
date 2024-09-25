import { styled } from "@mui/system";
import {
  Box,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";

export const StyledRating = styled(Rating)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.myColors.colorRateUsSelect,
    // color: "#8c8c8c",
    fontSize: "5rem",
    opacity: theme.myOpacity.opacitySelectRateUs,
  },
  "& .MuiRating-iconHover .MuiSvgIcon-root": {
    fontSize: "5rem",
  },
  "& .MuiRating-iconFilled .MuiSvgIcon-root": {
    fontSize: "5rem",
  },
}));

export const StyledContainerModal = styled(Box)(() => ({
  position: "fixed",
  bottom: "76px",
  left: "64px",
  zIndex: "999999",
}));
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.myColors.colorBackInput,
  color: theme.myColors.colorFFF,
  borderRadius: "50%",
  width: "60px",
  height: "60px",
}));
export const StyledWrapIconBtnText = styled(Box)(() => ({
  extAlign: "center",
  fontSize: "0.85rem",
  fontWeight: "bold",
}));
export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: "1.15rem",
  fontWeight: "bold",
  color: theme.myColors.colorFFF,
}));
export const StyledWrapLegend = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const StyledTypographyLegend = styled(Typography)(({ theme }) => ({
  color: theme.myColors.colorFFF,
}));
export const StyledDialogActions = styled(DialogActions)(() => ({
  padding: "0px 20px 24px 20px",
}));

StyledRating.displayName = "StyledRating";
StyledContainerModal.displayName = "StyledContainerModal";
StyledIconButton.displayName = "StyledIconButton";
StyledWrapIconBtnText.displayName = "StyledWrapIconBtnText";
StyledDialogTitle.displayName = "StyledDialogTitle";
StyledWrapLegend.displayName = "StyledWrapLegend";
StyledTypographyLegend.displayName = "StyledTypographyLegend";
StyledDialogActions.displayName = "StyledDialogActions";
