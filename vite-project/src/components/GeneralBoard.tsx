import { FC, ReactNode } from "react";
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
    </>
  );
};

export default GeneralBoard;
