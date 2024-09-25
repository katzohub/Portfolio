import { forwardRef, ReactElement, Ref } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";
import {
  Box,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

export const StyledRating = styled(Rating)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.myColors.colorRateUsSelect,
    fontSize: "5rem",
    opacity: theme.myOpacity.opacitySelectRateUs,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  "& .MuiRating-iconHover .MuiSvgIcon-root": {
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  "& .MuiRating-iconFilled .MuiSvgIcon-root": {
    fontSize: "5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
}));

export const StyledContainerModal = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "76px",
  left: "64px",
  zIndex: "999999",
  [theme.breakpoints.down("md")]: {
    left: "5px",
  },
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

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MotionStyledIconButton = motion(StyledIconButton);

StyledRating.displayName = "StyledRating";
StyledContainerModal.displayName = "StyledContainerModal";
StyledIconButton.displayName = "StyledIconButton";
StyledWrapIconBtnText.displayName = "StyledWrapIconBtnText";
StyledDialogTitle.displayName = "StyledDialogTitle";
StyledWrapLegend.displayName = "StyledWrapLegend";
StyledTypographyLegend.displayName = "StyledTypographyLegend";
StyledDialogActions.displayName = "StyledDialogActions";
