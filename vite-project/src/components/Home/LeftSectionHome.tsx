import { FC, useContext } from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledLeftContainer,
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
import { motion } from "framer-motion";
import useTypewriter from "../../hooks/useTypewriter";
import { LanguageContext } from "../../context/LanguageProvider";
import { FaChevronRight } from "react-icons/fa";
import { useIntl } from "react-intl";
import { Link } from "@mui/material";
import { BigButton } from "../../components/Buttons";
import canvaSvk from "../../assets/resume/canva_svk.webp";
import canvaUs from "../../assets/resume/canva_anj.webp";

const LeftSectionHome: FC = () => {
  const intl = useIntl();
  const { language } = useContext(LanguageContext);
  const openSnakeGame = () => {
    window.open("/game_snake", "_blank", "noopener,noreferrer");
  };
  const words = [
    intl.formatMessage({ id: "home.myWork" }),
    intl.formatMessage({ id: "home.designer" }),
  ];
  const typedText = useTypewriter(words);

  return (
    <>
      <StyledLeftContainer>
        <StyledLeftWrapper>
          <Box>
            <StyledLeftHeadingGeneral variant="h3">
              {intl.formatMessage({ id: "home.name" })}
            </StyledLeftHeadingGeneral>
            <StyledLeftHeadingName variant="h1">
              {intl.formatMessage({ id: "home.nameHeader" })}
            </StyledLeftHeadingName>
            <StyledLeftHeadingProfes variant="h2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaChevronRight className="chevronRight" /> {typedText}
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                |
              </motion.span>
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
                  data-cy="github-link-porfile"
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
            <BigButton myBtnFn={openSnakeGame} testId="start-game">
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
              <BigButton testId="download-cv">
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
