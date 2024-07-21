import { styled } from "@mui/system";
import { Box, Button, Typography, Link } from "@mui/material";
import { ContainerSnakeProps } from "../../types";

// Styled GameSNake
const StyledContactMinWidth = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  padding: "30px 0",
  background: `linear-gradient(150deg, ${theme.myColors.backgroundAreaFirst} 1.7%, ${theme.myColors.backgroundAreaSecond} 81.82%)`,
  boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
  border: `1px solid ${theme.myColors.borderTableSnake}`,
  borderRadius: "8px",
  position: "relative",
  zIndex: "99",

  [theme.breakpoints.down("md")]: {
    marginBlockEnd: "0px",
    display: "none",
  },
}));
const StyledContactMaxWidth = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  background:
    "linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%)",
  boxShadow: "0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset",
  border: `1px solid ${theme.myColors.borderTableSnake}`,
  position: "relative",
  zIndex: "9999",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
export const ContainerSnake: React.FC<ContainerSnakeProps> = ({
  isFullWindow,
  children,
}) => {
  return (
    <>
      {isFullWindow ? (
        <StyledContactMinWidth>{children}</StyledContactMinWidth>
      ) : (
        <StyledContactMaxWidth>{children}</StyledContactMaxWidth>
      )}
    </>
  );
};
export const StyledMiniCircleWrapper = styled(Box)(({ theme }) => ({
  "& .mini-circle": {
    "& .mini-stop-one": {
      stopColor: theme.myColors.stopColorOut,
    },
    "& .mini-stop-two": {
      stopColor: theme.myColors.stopColorIn,
    },
    "& .mini-path": {
      stroke: theme.myColors.strokeMiniCircle,
    },
    "& .feColorMatrix": {
      result: theme.myColors.resultCanal,
      in: theme.myColors.inCanal,
    },
  },
}));
export const StyledSnakeGameArea = styled(Box)(({ theme }) => ({
  background: theme.myColors.backgroundAreaSnake,
  boxShadow: `${theme.myShadow.shadowAreaSnake} inset`,
  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: "20px",
  },
}));
export const StyledSnakeScreenLogo = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "67px",
  backgroundImage: `url(${theme.myUrl.snakeLogoUrl})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "50%",
  height: "50%",
}));
export const StyledStartGameBtn = styled(Button)(() => ({
  top: "70%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "#607B96",
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  cursor: "pointer",
}));
export const StyledTextStartGame = styled(Typography)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.myColors.backgroundBtnSnake,
  boxShadow: `${theme.myShadow.shadowBtnSnake} inset`,
  height: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.myColors.fotnBtnSnake,
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "100%",
}));
export const StyledContainerContinue = styled(Box)(() => ({
  width: "240px",
  position: "absolute",
  bottom: 50,
  left: 0,
  zIndex: "9",
}));
export const StyledTextContinue = styled(Typography)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.myColors.backgroundBtnSnake,
  boxShadow: `${theme.myShadow.shadowBtnSnake} inset`,
  color: theme.myColors.fotnBtnSnake,
  height: "60px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "100%",
}));
export const StyledContainerStart = styled(Button)(() => ({
  position: "relative",
  top: "25px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "#607B96",
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  cursor: "pointer",
}));
export const StyledContainerGameOver = styled(Box)(() => ({
  width: "240px",
  position: "absolute",
  bottom: 50,
  left: 0,
  zIndex: "9",
}));
export const StyledTextGameOver = styled(Typography)(({ theme }) => ({
  borderRadius: "8px",
  background: theme.myColors.backgroundBtnSnake,
  boxShadow: `${theme.myShadow.shadowBtnSnake} inset`,
  color: theme.myColors.fotnBtnSnake,
  height: "60px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "100%",
}));

export const StyledContainerStartGame = styled(Button)(() => ({
  position: "relative",
  top: "25px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "#607B96",
  fontFamily: "Fira Code",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  cursor: "pointer",
}));
const StyledSnakeBoxSettingMinScreen = styled(Box)(() => ({
  marginTop: "35px",
  width: "181.382px",
  height: "142px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: " 8px",
  background: "rgba(1, 20, 35, 0.19)",
  color: "#fff",
}));
const StyledSnakeBoxSettingMaxScreen = styled(Box)(({ theme }) => ({
  marginTop: "0px",
  width: "240px",
  height: "142px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  borderRadius: "8px",
  background: "rgba(1, 20, 35, 0.19)",
  color: "#fff",
  position: "relative",
  top: "-110px",
  left: "50px",
  "& p": {
    fontSize: 14,
    fontFamily: "Fira Code",
    fontWeight: "450",
    wordWrap: "break-word",
  },
  [theme.breakpoints.down("md")]: {
    position: "relative",
    background: "transparent",
    top: "100px",
    left: "0px",
  },
}));
export const StyledSnakeBoxSetting: React.FC<ContainerSnakeProps> = ({
  isFullWindow,
  children,
}) => {
  return (
    <>
      {isFullWindow ? (
        <StyledSnakeBoxSettingMinScreen>
          {children}
        </StyledSnakeBoxSettingMinScreen>
      ) : (
        <StyledSnakeBoxSettingMaxScreen>
          {children}
        </StyledSnakeBoxSettingMaxScreen>
      )}
    </>
  );
};
export const StyledSnakeArrowTextFirst = styled(Typography)(({ theme }) => ({
  marginBottom: "8px !important",
  fontFamily: "Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  position: "relative",
  left: "-4px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledSnakeArrowTextSecond = styled(Typography)(({ theme }) => ({
  marginBottom: "16px !important",
  fontFamily: "Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const StyledSnakeContainerFoodMinWidth = styled(Box)(() => ({
  width: "120px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5px",
  position: "relative",
  left: "32px",
  top: "25px",
  zIndex: "20 !important",
}));
const StyledSnakeContainerFoodMaxWidth = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5px",
  position: "relative",
  top: "-200px",
  left: "112px",
  [theme.breakpoints.down("md")]: {
    top: "15px",
    left: "50%",
    height: "auto",
    width: "240px",
    transform: "translateX(-50%)",
    position: "absolute",
    flexDirection: "column",
  },
}));
export const StyledSnakeContainerFood: React.FC<ContainerSnakeProps> = ({
  isFullWindow,
  children,
}) => {
  return (
    <>
      {isFullWindow ? (
        <StyledSnakeContainerFoodMinWidth>
          {children}
        </StyledSnakeContainerFoodMinWidth>
      ) : (
        <StyledSnakeContainerFoodMaxWidth>
          {children}
        </StyledSnakeContainerFoodMaxWidth>
      )}
    </>
  );
};
export const StyledSnakeFoodLeft = styled(Typography)(() => ({
  color: "#FFF",
  fontFamily: "Fira Code !important",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 450,
  lineHeight: "normal",
}));
export const StyledSnakePointContainer = styled(Box)(({ theme }) => ({
  width: "90px",
  "& .point-snake-fist": {
    fill: theme.myColors.pointSnakeSecond,
  },
  "& .point-snake-second": {
    fill: theme.myColors.pointSnakeThread,
  },
  "& .point-snake-thread": {
    fill: theme.myColors.pointSnake,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));
// Styled LefSectionHome
export const StyledLeftContainer = styled(Box)(({ theme }) => ({
  height: "470px",
  display: "flex",
  flexDirection: "column",

  position: "relative",
  [theme.breakpoints.down("lg")]: {
    height: "auto",
  },
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "7px",
    paddingBottom: "102px",
  },
}));
export const StyledLeftWrapp = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: { display: "block" },
}));
export const StyledLeftWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "space-between",
  justifyContent: "space-between",
  alignContent: "space-between",
  zIndex: "99",
  [theme.breakpoints.down("lg")]: {
    alignItems: "space-between",
    justifyContent: "center",
    alignContent: "center",
    gap: "25px 0",
    height: "max-content",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
    alignContent: "center",
    gap: "25px 0",
    height: "max-content",
  },
}));
export const StyledLeftHeadingGeneral = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code !important",
  color: `${theme.myColors.colorGrey} !important`,
  fontSize: "18px !important",
  fontStyle: "normal",
  lineHeight: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px !important",
  },
}));
export const StyledLeftHeadingName = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code !important",
  color: `${theme.myColors.colorGrey} !important`,
  fontSize: "62px !important",
  fontStyle: "normal",
  fontWeight: "600 !important",
  lineHeight: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "42px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px !important",
  },
}));
export const StyledLeftHeadingProfes = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code !important",
  color: `${theme.myColors.colorPurple} !important`,
  fontSize: "30px !important",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px !important",
    "& .chevronRight": {
      fontSize: "30px",
      position: "relative",
      top: "2px",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px !important",
      },
    },
  },
  "& svg": {
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
  },
}));
export const StyledLeftArticleContainer = styled(Box)(({ theme }) => ({
  "& p": {
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
  },
}));
export const StyledLeftArticlePrimaryText = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code !important",
  color: `${theme.myColors.textColorNav} !important`,

  fontStyle: "normal",
  fontWeight: 450,
  padding: "2.5px 0",
  lineHeight: "normal",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledLeftArticlePrimaryTextMobile = styled(Typography)(
  ({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
      fontFamily: "Fira Code !important",
      color: `${theme.myColors.textColorNav} !important`,
      fontStyle: "normal",
      fontWeight: 450,
      padding: "2.5px 0",
      lineHeight: "normal",
    },
  })
);
export const StyledLeftArticlePurpleText = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code",
  color: `${theme.myColors.colorPurple} !important`,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
}));
export const StyledLeftArticleGreen = styled(Typography)(({ theme }) => ({
  fontFamily: "Fira Code",
  color: theme.myColors.colorLightGreen,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
}));
export const StyledLeftArticleWhite = styled(Typography)(({ theme }) => ({
  color: theme.myColors.whiteColor,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
}));
export const StyledLeftArticleLinkMaxScreen = styled(Link)(({ theme }) => ({
  fontFamily: "Fira Code",
  color: theme.myColors.colorLightLinkHomeGithub,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  borderBottom: "1px solid transparent",
  transition: "border-bottom 0.3s ease-in",
  textDecoration: "none",
  "&:hover": {
    borderBottom: `1px solid ${theme.myColors.colorLightLinkHomeGithub}`,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledLeftArticleLinkMinScreen = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    fontFamily: "Fira Code",
    color: theme.myColors.colorLightLinkHomeGithub,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    borderBottom: "1px solid transparent",
    transition: "border-bottom 0.3s ease-in",
  },
  "&:hover": {
    borderBottom: `1px solid ${theme.myColors.colorLightLinkHomeGithub}`,
  },
}));
export const StyledLeftContainerBtns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px 0",
  position: "relative",
  top: "-10px",
  [theme.breakpoints.down("lg")]: {
    top: "0px",
  },
}));
StyledContactMinWidth.displayName = "StyledContactMinWidth";
StyledContactMaxWidth.displayName = "StyledContactMaxWidth";
ContainerSnake.displayName = "ContainerSnake";
StyledMiniCircleWrapper.displayName = "StyledMiniCircleWrapper";
StyledSnakeGameArea.displayName = "StyledSnakeGameArea";
StyledSnakeScreenLogo.displayName = "StyledSnakeScreenLogo";
StyledStartGameBtn.displayName = "StyledStartGameBtn";
StyledTextStartGame.displayName = "StyledTextStartGame";
StyledContainerContinue.displayName = "StyledContainerContinue";
StyledTextContinue.displayName = "StyledTextContinue";
StyledContainerStart.displayName = "StyledContainerStart";
StyledContainerGameOver.displayName = "StyledContainerGameOver";
StyledTextGameOver.displayName = "StyledTextGameOver";
StyledContainerStartGame.displayName = "StyledContainerStartGame";
StyledSnakeBoxSettingMinScreen.displayName = "StyledSnakeBoxSettingMinScreen";
StyledSnakeBoxSettingMaxScreen.displayName = "StyledSnakeBoxSettingMaxScreen";
StyledSnakeBoxSetting.displayName = "StyledSnakeBoxSetting";
StyledSnakeArrowTextFirst.displayName = "StyledSnakeArrowTextFirst";
StyledSnakeArrowTextSecond.displayName = "StyledSnakeArrowTextSecond";
StyledSnakeContainerFoodMinWidth.displayName =
  "StyledSnakeContainerFoodMinWidth";
StyledSnakeContainerFoodMaxWidth.displayName =
  "StyledSnakeContainerFoodMaxWidth";
StyledSnakeContainerFood.displayName = "StyledSnakeContainerFood";
StyledSnakeFoodLeft.displayName = "StyledSnakeFoodLeft";
StyledSnakePointContainer.displayName = "StyledSnakePointContainer";
StyledLeftContainer.displayName = "StyledLeftContainer";
StyledLeftWrapp.displayName = "StyledLeftWrapp";
StyledLeftWrapper.displayName = "StyledLeftWrapper";
StyledLeftHeadingGeneral.displayName = "StyledLeftHeadingGeneral";
StyledLeftHeadingName.displayName = "StyledLeftHeadingName";
StyledLeftHeadingProfes.displayName = "StyledLeftHeadingProfes";
StyledLeftArticleContainer.displayName = "StyledLeftArticleContainer";
StyledLeftArticlePrimaryText.displayName = "StyledLeftArticlePrimaryText";
StyledLeftArticlePrimaryTextMobile.displayName =
  "StyledLeftArticlePrimaryTextMobile";
StyledLeftArticlePurpleText.displayName = "StyledLeftArticlePurpleText";
StyledLeftArticleGreen.displayName = "StyledLeftArticleGreen";
StyledLeftArticleWhite.displayName = "StyledLeftArticleWhite";
StyledLeftArticleLinkMaxScreen.displayName = "StyledLeftArticleLinkMaxScreen";
StyledLeftArticleLinkMinScreen.displayName = "StyledLeftArticleLinkMinScreen";
StyledLeftContainerBtns.displayName = "StyledLeftContainerBtns";
