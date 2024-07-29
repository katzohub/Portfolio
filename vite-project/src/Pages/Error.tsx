import {
  StyledContainerError,
  StyledPrimaryTextError,
  StyledGeneralTextError,
  StyledGoHomeBtn,
} from "./StyledPages";
import { Link } from "react-router-dom";
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
        <StyledGoHomeBtn data-cy="go-btn-home">
          <Link to="/">{intl.formatMessage({ id: "notFound.goHome" })}</Link>
        </StyledGoHomeBtn>
      </StyledContainerError>
    </>
  );
};

export default Eroor;
