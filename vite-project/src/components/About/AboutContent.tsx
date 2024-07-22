import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ja from "../../assets/img/ja.png";
import { useIntl } from "react-intl";
import {
  StyledAboutContainer,
  StyledAboutContainerTemplate,
  StyledAboutWrappTemplate,
  StyledAboutDivider,
  StyledAboutContainerRight,
  StyledAboutWrappRight,
  StyledAboutText,
  StyledAboutTextWrap,
  StyledAboutTextGrayNone,
  StyledAboutTextGray,
  StyledAboutTextPink,
  StyledAboutTextPurple,
  StyledAboutTextOrange,
  StyledAboutNextText,
  StyledAboutCodeWrapper,
  StyledAboutImgContainer,
} from "./StyledAbout";
import { AboutContentProps } from "../../types";
import { motion, AnimatePresence } from "framer-motion";

const MotionStyledAboutContainerTemplate = motion(StyledAboutContainerTemplate);
const MotionStyledAboutContainerRight = motion(StyledAboutContainerRight);

const AboutContent: FC<AboutContentProps> = ({
  templateProps,
  activeButton,
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);
  const intl = useIntl();

  return (
    <>
      <StyledAboutContainer>
        <AnimatePresence>
          {isReady && (
            <MotionStyledAboutContainerTemplate
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <StyledAboutWrappTemplate>
                // {intl.formatMessage({ id: `about.${activeButton}` })}
              </StyledAboutWrappTemplate>
              <Box>{templateProps}</Box>
            </MotionStyledAboutContainerTemplate>
          )}

          <StyledAboutDivider />
          {isReady && (
            <MotionStyledAboutContainerRight
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <StyledAboutWrappRight>
                <StyledAboutText>
                  <StyledAboutTextWrap>
                    <Box>
                      <StyledAboutTextGrayNone variant="caption">
                        1&nbsp;
                      </StyledAboutTextGrayNone>
                      <StyledAboutTextPink variant="caption">
                        const&nbsp;
                      </StyledAboutTextPink>
                      <StyledAboutTextPurple variant="caption">
                        button&nbsp;
                      </StyledAboutTextPurple>
                      <StyledAboutTextPink variant="caption">
                        =&nbsp;
                      </StyledAboutTextPink>{" "}
                    </Box>

                    <Box
                      sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: { paddingLeft: "45px" },
                      })}
                    >
                      <StyledAboutTextPurple variant="caption">
                        document.querySelector
                      </StyledAboutTextPurple>{" "}
                      <StyledAboutTextGray variant="caption">
                        (
                      </StyledAboutTextGray>
                      <StyledAboutTextOrange variant="caption">
                        '#sendBtn'
                      </StyledAboutTextOrange>
                      <StyledAboutTextGray variant="caption">
                        );
                      </StyledAboutTextGray>
                    </Box>
                  </StyledAboutTextWrap>
                  <StyledAboutTextGrayNone variant="caption">
                    2&nbsp;
                    <br />
                  </StyledAboutTextGrayNone>
                  <StyledAboutNextText>
                    <Box>
                      {" "}
                      <StyledAboutTextGrayNone variant="caption">
                        3&nbsp;
                      </StyledAboutTextGrayNone>
                      <StyledAboutTextPink variant="caption">
                        const
                      </StyledAboutTextPink>
                      &nbsp;
                      <StyledAboutTextPurple variant="caption">
                        image
                      </StyledAboutTextPurple>
                      &nbsp;
                      <StyledAboutTextPink variant="caption">
                        =
                      </StyledAboutTextPink>
                      &nbsp;
                    </Box>

                    <StyledAboutCodeWrapper>
                      <StyledAboutTextPurple variant="caption">
                        document.querySelector
                      </StyledAboutTextPurple>{" "}
                      <StyledAboutTextGray variant="caption">{`(`}</StyledAboutTextGray>
                      <StyledAboutTextOrange variant="caption">
                        '#myImage'
                      </StyledAboutTextOrange>
                      <StyledAboutTextGray variant="caption">{`);`}</StyledAboutTextGray>
                    </StyledAboutCodeWrapper>
                  </StyledAboutNextText>
                  <StyledAboutTextGrayNone variant="caption">
                    4&nbsp;
                    <br />
                  </StyledAboutTextGrayNone>
                  <StyledAboutTextGrayNone variant="caption">
                    5&nbsp;
                  </StyledAboutTextGrayNone>
                  <StyledAboutTextPurple variant="caption">
                    button
                    <StyledAboutTextGray variant="caption">
                      .
                    </StyledAboutTextGray>
                    addEventListener
                  </StyledAboutTextPurple>
                  <StyledAboutTextGray variant="caption">(</StyledAboutTextGray>
                  <StyledAboutTextOrange variant="caption">
                    'click'
                  </StyledAboutTextOrange>
                  <StyledAboutTextGray variant="caption">
                    , ()
                  </StyledAboutTextGray>
                  &nbsp;
                  <StyledAboutTextPink variant="caption">{`=>`}</StyledAboutTextPink>
                  &nbsp;
                  <StyledAboutTextGray variant="caption">{`{`}</StyledAboutTextGray>
                  <br />
                  <StyledAboutTextGrayNone variant="caption">
                    6&nbsp;
                  </StyledAboutTextGrayNone>
                  &nbsp;&nbsp;
                  <StyledAboutTextPurple variant="caption">
                    image
                    <StyledAboutTextGray variant="caption">
                      .
                    </StyledAboutTextGray>
                    src
                  </StyledAboutTextPurple>
                  <StyledAboutTextPink variant="caption">
                    &nbsp;=&nbsp;
                  </StyledAboutTextPink>
                  <StyledAboutTextPurple variant="caption">
                    "my_img.png"
                  </StyledAboutTextPurple>
                  <StyledAboutTextGray variant="caption">
                    ; <br />
                    <StyledAboutTextGrayNone variant="caption">
                      7&nbsp;
                    </StyledAboutTextGrayNone>
                    {`}`})
                  </StyledAboutTextGray>
                  <br />
                </StyledAboutText>
              </StyledAboutWrappRight>
              <StyledAboutImgContainer>
                <StyledAboutTextGray variant="caption">
                  // Result
                </StyledAboutTextGray>
                <img src={ja} alt="Mine photo" />
              </StyledAboutImgContainer>
            </MotionStyledAboutContainerRight>
          )}
        </AnimatePresence>
      </StyledAboutContainer>
    </>
  );
};

export default AboutContent;
