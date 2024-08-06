import { FC } from "react";
import {
  StyledComponentsContainer,
  StyledComponentsWrapper,
  StyledComponentsDivider,
  StyledComponentsGeneralContainer,
  StyledComponentsGeneralBoxHeading,
  StyledComponentsGeneralBoxText,
  StyledComponentsGeneralContainerMinWidth,
  StyledComponentsContentContainer,
} from "./StyledComponents";
import { useIntl } from "react-intl";
import { GeneralBoardProps } from "../types";
import { Box } from "@mui/material";

const GeneralBoard: FC<GeneralBoardProps> = ({
  generalHeading,
  generalText,
  leftTemplate,
  postprimaryTemplate,
  generalTemplate,
  smallGeneralHeading,
  isPageSkills,
}) => {
  const intl = useIntl();

  return (
    <Box
      component={"main"}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          minHeight: "100dvh",
          overflowY: "hidden",
        },
      })}
    >
      <StyledComponentsContainer>
        <Box
          sx={(theme) => ({
            overflow: isPageSkills ? "hidden" : "visible",
            width: "100%",
            height: "100dvh",
            display: "flex",
            [theme.breakpoints.down("md")]: {
              display: "block",
              position: "relative",
              overflow: isPageSkills ? "visible" : "visible",
            },
          })}
        >
          <StyledComponentsWrapper
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <StyledComponentsDivider></StyledComponentsDivider>
            <StyledComponentsContentContainer>
              <StyledComponentsGeneralContainer>
                <StyledComponentsGeneralBoxHeading>
                  {intl.formatMessage({ id: generalHeading })}
                </StyledComponentsGeneralBoxHeading>

                <StyledComponentsGeneralBoxText>
                  {intl.formatMessage({ id: generalText })}
                </StyledComponentsGeneralBoxText>
              </StyledComponentsGeneralContainer>
            </StyledComponentsContentContainer>
            <StyledComponentsGeneralContainerMinWidth
              id="nested-list-subheader"
              disableGutters
            >
              {intl.formatMessage({ id: smallGeneralHeading })}
            </StyledComponentsGeneralContainerMinWidth>
            {leftTemplate}
            {postprimaryTemplate}
          </StyledComponentsWrapper>
          {generalTemplate}
        </Box>
      </StyledComponentsContainer>
    </Box>
  );
};

export default GeneralBoard;
