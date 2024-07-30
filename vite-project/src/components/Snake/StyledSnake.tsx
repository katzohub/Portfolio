import { styled } from "@mui/system";
import { Box } from "@mui/material";

// Styled KeyboardSnake
export const StyledSnakeArrowsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "-10px",
  },
}));
export const StyledSnakeArrowUp = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.myColors.generalBackground,
  color: "#fff",
  borderRadius: "8px",
  position: "relative",
  top: "-5px",
  zIndex: 4,
}));
export const StyledSnakeArrowsWrapp = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));
export const StyledSnakeArrowLeft = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.myColors.generalBackground,
  color: "#fff",
  borderRadius: "8px",
  position: "relative",
  left: "-5px",
}));
export const StyledSnakeArrowDown = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.myColors.generalBackground,
  color: "#fff",
  borderRadius: "8px",
  zIndex: 4,
}));
export const StyledSnakeArrowRight = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "28px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.myColors.generalBackground,
  color: "#fff",
  borderRadius: "8px",
  position: "relative",
  right: "-5px",
  zIndex: 4,
}));
export const StyledSnakeArrowsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  top: "-25px",
  [theme.breakpoints.down("lg")]: {
    position: "relative",
    top: "7.5px",
  },
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "-10px",
  },
}));
export const StyledSnakeBigBtnContainer = styled(Box)(() => ({
  position: "relative",
  top: "0px",
}));
export const StyledSnakeBigBtnLeftWrapp = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));
export const StyledSnakeBigBtnLeftPosition = styled(Box)(() => ({
  position: "relative",
  left: "0px",
}));
StyledSnakeArrowsContainer.displayName = "StyledSnakeArrowsContainer";
StyledSnakeArrowUp.displayName = "StyledSnakeArrowUp";
StyledSnakeArrowsWrapp.displayName = "StyledSnakeArrowsWrapp";
StyledSnakeArrowLeft.displayName = "StyledSnakeArrowLeft";
StyledSnakeArrowDown.displayName = "StyledSnakeArrowDown";
StyledSnakeArrowRight.displayName = "StyledSnakeArrowRight";
StyledSnakeArrowsWrapper.displayName = "StyledSnakeArrowsWrapper";
StyledSnakeBigBtnContainer.displayName = "StyledSnakeBigBtnContainer";
StyledSnakeBigBtnLeftWrapp.displayName = "StyledSnakeBigBtnLeftWrapp";
StyledSnakeBigBtnLeftPosition.displayName = "StyledSnakeBigBtnLeftPosition";
