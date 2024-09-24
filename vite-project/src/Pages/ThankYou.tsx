import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import {
  StyledContainerThanks,
  StyledHeadingThanks,
  StyledBtnThanks,
} from "./StyledPages";

const ThankYou = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const handleButtonClick = () => {
    navigate("/contact-me");
  };

  return (
    <StyledContainerThanks>
      <StyledHeadingThanks variant="h2">
        {intl.formatMessage({ id: "thankYou.thankYou" })}
      </StyledHeadingThanks>
      <p>{intl.formatMessage({ id: "thankYou.thankYouText" })}</p>
      <StyledBtnThanks variant="contained" onClick={handleButtonClick}>
        {intl.formatMessage({ id: "thankYou.thankYouBtn" })}
      </StyledBtnThanks>
    </StyledContainerThanks>
  );
};

export default ThankYou;
