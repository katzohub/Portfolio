import { FC } from "react";
import {
  StyledComponentsContainer,
  StyledComponentsWrapp,
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
        <StyledComponentsWrapp>
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
        </StyledComponentsWrapp>
      </StyledComponentsContainer>
    </Box>
  );
};

export default GeneralBoard;
