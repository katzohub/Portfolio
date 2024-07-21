import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import {
  StyledComponentsContainer,
  StyledComponentsWrapp,
  StyledComponentsWrapper,
  StyledComponentsDivider,
  StyledComponentsGeneralContainer,
  StyledComponentsGeneralBoxHeading,
  StyledComponentsGeneralBoxText,
  StyledComponentsGeneralContainerMinWidth,
} from "./StyledComponents";
import { useIntl } from "react-intl";

type GeneralBoardProps = {
  generalHeading: string;
  generalText: string;
  leftTemplate: ReactNode;
  postprimaryTemplate?: ReactNode;
  generalTemplate: ReactNode;
  smallGeneralHeading: string;
};

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
    <>
      <StyledComponentsContainer>
        <StyledComponentsWrapp>
          <StyledComponentsWrapper
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <StyledComponentsDivider></StyledComponentsDivider>
            <Box
              sx={(theme) => ({
                width: "100vw",
                height: "56px",
                fontFamily: "Fira Code !important",
                display: "flex",
                justifyContent: "center",
                color: `${theme.myColors.colorFFF} !important`,
                fontSize: "16px !important",
                fontStyle: "normal",
                position: "relative",
                fontWeight: 400,
                [theme.breakpoints.down("md")]: {
                  width: "auto !important",
                  borderBottom: `1px solid transparent`,
                  left: "0px",
                  display: "none",
                },
              })}
            >
              <StyledComponentsGeneralContainer>
                <StyledComponentsGeneralBoxHeading>
                  {intl.formatMessage({ id: generalHeading })}
                </StyledComponentsGeneralBoxHeading>

                <StyledComponentsGeneralBoxText>
                  {intl.formatMessage({ id: generalText })}
                </StyledComponentsGeneralBoxText>
              </StyledComponentsGeneralContainer>
            </Box>
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
    </>
  );
};

export default GeneralBoard;
