import { Outlet } from "react-router-dom";
import { StyledGeneralContainer } from "./StyledPages";
import { Navbar, RateUs } from "../containers";
import { useIntl } from "react-intl";

const SharedLayout = () => {
  const intl = useIntl();

  return (
    <>
      <StyledGeneralContainer>
        <Navbar isTopnav={true} text={intl.formatMessage({ id: "nav.name" })} />

        <Outlet />
        <RateUs />
        <Navbar
          isTopnav={false}
          text={intl.formatMessage({ id: "footer.findMeIn" })}
        />
      </StyledGeneralContainer>
    </>
  );
};

export default SharedLayout;
