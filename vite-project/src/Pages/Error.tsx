import {
  StyledContainerError,
  StyledPrimaryTextError,
  StyledGeneralTextError,
} from "./StyledPages";
import { useIntl } from "react-intl";

const Eroor = () => {
  const intl = useIntl();
  return (
    <>
      <StyledContainerError>
        <StyledGeneralTextError variant="h1" fontSize={35}>
          {intl.formatMessage({ id: "notFound.generalText" })}
        </StyledGeneralTextError>
        <StyledPrimaryTextError variant="h4" fontSize={20} mt={3}>
          {intl.formatMessage({ id: "notFound.primaryText" })}
        </StyledPrimaryTextError>
      </StyledContainerError>
    </>
  );
};

export default Eroor;
