import { FC } from "react";
import { Outlet } from "react-router-dom";
import { StyledGeneralContainer } from "./StyledPages";
import { Navbar } from "../containers";
import { useIntl } from "react-intl";

const SharedLayout: FC = () => {
  const intl = useIntl();

  return (
    <>
      <StyledGeneralContainer>
        <Navbar isTopnav={true} text={intl.formatMessage({ id: "nav.name" })} />
        <Outlet />
        <Navbar
          isTopnav={false}
          text={intl.formatMessage({ id: "footer.findMeIn" })}
        />
      </StyledGeneralContainer>
    </>
  );
};

export default SharedLayout;
