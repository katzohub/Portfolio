import { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledLeftContainer,
  StyledLeftWrapp,
  StyledLeftWrapper,
  StyledLeftHeadingGeneral,
  StyledLeftHeadingName,
  StyledLeftHeadingProfes,
  StyledLeftArticleContainer,
  StyledLeftArticlePrimaryText,
  StyledLeftArticlePrimaryTextMobile,
  StyledLeftArticlePurpleText,
  StyledLeftArticleGreen,
  StyledLeftArticleWhite,
  StyledLeftArticleLinkMinScreen,
  StyledLeftContainerBtns,
} from "./StyledHome";
import { LanguageContext } from "../../context/LanguageProvider";
import { FaChevronRight } from "react-icons/fa";
import { useIntl } from "react-intl";
import { Link } from "@mui/material";
import { BigButton } from "../../components/Buttons";
import canvaSvk from "../../assets/resume/canva_svk.pdf";
import canvaUs from "../../assets/resume/canva_anj.pdf";
import {
  BackroundGlassSnakeLeft,
  BackroundGlassSnakeRight,
} from "../../assets/svg";

const LeftSectionHome: FC = () => {
  const intl = useIntl();
  const { language } = useContext(LanguageContext);
  const openSnakeGame = () => {
    window.open("/game_snake", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <StyledLeftContainer>
        <StyledLeftWrapp>
          <BackroundGlassSnakeLeft />
          <BackroundGlassSnakeRight />
        </StyledLeftWrapp>
        <StyledLeftWrapper>
          <Box>
            <StyledLeftHeadingGeneral variant="h3">
              {intl.formatMessage({ id: "home.name" })}
            </StyledLeftHeadingGeneral>
            <StyledLeftHeadingName variant="h1">
              {intl.formatMessage({ id: "home.nameHeader" })}
            </StyledLeftHeadingName>
            <StyledLeftHeadingProfes variant="h2">
              <FaChevronRight className="chevronRight" />
              {intl.formatMessage({ id: "home.myWork" })}
            </StyledLeftHeadingProfes>
          </Box>
          <StyledLeftArticleContainer>
            <StyledLeftArticlePrimaryText variant="body2">
              // {intl.formatMessage({ id: "home.posTitleOne" })}
            </StyledLeftArticlePrimaryText>

            <StyledLeftArticlePrimaryTextMobile variant="body2">
              // {intl.formatMessage({ id: "home.posTitleMobile" })}
            </StyledLeftArticlePrimaryTextMobile>

            <Typography variant="body2">
              <StyledLeftArticlePurpleText variant="caption">
                const{" "}
              </StyledLeftArticlePurpleText>
              <StyledLeftArticleGreen variant="caption">
                githubLink
              </StyledLeftArticleGreen>
              <StyledLeftArticleWhite variant="caption">
                {" "}
                ={" "}
              </StyledLeftArticleWhite>
              <span>
                <StyledLeftArticleLinkMinScreen
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/katzohub"
                >
                  “https://github.com/katzohub”
                </StyledLeftArticleLinkMinScreen>
              </span>
            </Typography>
          </StyledLeftArticleContainer>
          <StyledLeftContainerBtns>
            <BigButton myBtnFn={openSnakeGame}>
              {intl.formatMessage({ id: "home.startGameBtn" })}
            </BigButton>

            <Link
              href={language === "sk-SK" ? canvaSvk : canvaUs}
              download={"portfolio_design"}
              sx={(theme) => ({
                color: `${theme.myColors.textColorNav} !important`,
                textDecoration: "none !important",
                "&:hover": {
                  color: `${theme.myColors.whiteColor} !important`,
                },
              })}
            >
              <BigButton>
                {intl.formatMessage({ id: "home.download.cv" })}
              </BigButton>
            </Link>
          </StyledLeftContainerBtns>
        </StyledLeftWrapper>
      </StyledLeftContainer>
    </>
  );
};

export default LeftSectionHome;
